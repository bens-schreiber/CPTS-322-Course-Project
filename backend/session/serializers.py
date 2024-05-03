from rest_framework import serializers
from .models import Session, Poll, Question, Response, Answer


class SessionSerializer(serializers.ModelSerializer):
    poll = serializers.PrimaryKeyRelatedField(queryset=Poll.objects.all())

    class Meta:
        model = Session
        fields = "__all__"


class PollSerializer(serializers.ModelSerializer):
    session = serializers.PrimaryKeyRelatedField(queryset=Session.objects.all())

    class Meta:
        model = Poll
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = "__all__"


class ResponseSerializer(serializers.ModelSerializer):
    answer = serializers.PrimaryKeyRelatedField(queryset=Answer.objects.all())
    poll = serializers.PrimaryKeyRelatedField(queryset=Poll.objects.all())

    class Meta:
        model = Response
        fields = "__all__"


class AnswerSerializer(serializers.ModelSerializer):
    question = serializers.PrimaryKeyRelatedField(queryset=Question.objects.all())

    class Meta:
        model = Answer
        fields = "__all__"


# APIView serializers


class QuestionCreateAnswerInputSerializer(serializers.Serializer):
    answer = serializers.CharField(max_length=0xFFF)
    is_correct = serializers.BooleanField()


class QuestionCreateSerializer(serializers.Serializer):
    prompt = serializers.CharField(max_length=0xFFF)
    answers = QuestionCreateAnswerInputSerializer(many=True)

    def are_answers_valid(self, answers):
        """Validates the answers field in the validated data"""
        if len(answers) == 0:
            raise serializers.ValidationError("Answers cannot be empty")

        if not any(answer["is_correct"] for answer in answers):
            raise serializers.ValidationError("At least one answer must be correct")

        return answers

    def create(self, validated_data):
        """Creates a Question object from the validated data and saves it in the database"""
        answers = validated_data.pop("answers")
        question: Question = Question.objects.create(**validated_data)

        for answer in answers:
            Answer.objects.create(question=question, **answer)

        return question


class SessionStartSerializer(serializers.Serializer):
    session = serializers.PrimaryKeyRelatedField(queryset=Session.objects.all())
    question = serializers.PrimaryKeyRelatedField(queryset=Question.objects.all())

    def create(self, validated_data):
        """Creates a Poll object from the validated data and saves it in the database"""
        question: Question = validated_data.pop("question")

        poll: Poll = Poll.objects.create(is_accepting_answers=True, **validated_data)

        question.poll = poll
        question.save()
        return poll


class SessionEndSerializer(serializers.Serializer):
    session = serializers.PrimaryKeyRelatedField(queryset=Session.objects.all())

    def is_poll_valid(self):
        session: Session = self.validated_data["session"]
        if not Poll.objects.filter(session=session).exists():
            raise serializers.ValidationError("Poll does not exist.")
        if session.poll.is_accepting_answers:
            raise serializers.ValidationError("Poll is accepting answers.")
        return session.poll

    def create(self, validated_data):
        pass


class PollNextQuestionSerializer(serializers.Serializer):
    poll = serializers.PrimaryKeyRelatedField(queryset=Poll.objects.all())
    question = serializers.PrimaryKeyRelatedField(queryset=Question.objects.all())

    def is_poll_valid(
        self,
    ):
        poll: Poll = self.validated_data["poll"]
        if poll.is_accepting_answers:
            raise serializers.ValidationError("Poll is accepting answers.")
        return poll

    def create(self, validated_data):
        poll: Poll = validated_data.pop("poll")
        return poll


class PollSetAcceptingAnswersSerializer(serializers.Serializer):
    poll = serializers.PrimaryKeyRelatedField(queryset=Poll.objects.all())

    def is_poll_valid(self):
        poll: Poll = self.validated_data["poll"]
        if not Question.objects.filter(poll=poll.id).exists():
            raise serializers.ValidationError("Poll does not have a question.")
        return poll

    def create(self, validated_data):
        poll: Poll = validated_data.pop("poll")
        return poll


class PollSubmitResponseSerializer(serializers.Serializer):
    poll = serializers.PrimaryKeyRelatedField(queryset=Poll.objects.all())
    answer = serializers.PrimaryKeyRelatedField(queryset=Answer.objects.all())

    def is_poll_valid(self):
        poll: Poll = self.validated_data["poll"]
        if not poll.is_accepting_answers:
            raise serializers.ValidationError("Poll is not accepting answers.")
        return poll

    def create(self, validated_data):
        poll: Poll = validated_data.pop("poll")
        return poll
