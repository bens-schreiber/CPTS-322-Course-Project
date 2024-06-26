from django.db import models


class Session(models.Model):
    """
    Session Model

    Attributes
    label (str): Session Name
    """

    label = models.CharField(max_length=255)


class Poll(models.Model):
    """
    Poll Model

    Attributes
    session (Session): Session which the poll is connected to
    question (Question): Question for the poll
    is_accepting_answers (bool): Whether the poll is accepting answers or not
    """

    session = models.OneToOneField("Session", on_delete=models.CASCADE)
    is_accepting_answers = models.BooleanField(default=False)


class Question(models.Model):
    """
    Question Model

    Attributes:
    prompt (str): The question/prompt
    """

    prompt = models.CharField(max_length=0xFFF, default="")
    poll = models.OneToOneField("Poll", on_delete=models.CASCADE, null=True)


class Answer(models.Model):
    """
    Answer Model

    Attributes
    answer (str): Text of the answer
    response (Response): Each response will have one Answer
    question (Question): The question this answer is connected to
    is_correct (bool): Whether this answer is correct or not
    """

    answer = models.CharField(max_length=0xFFF, default="")
    question = models.ForeignKey("Question", on_delete=models.CASCADE)
    is_correct = models.BooleanField(default=False)


class Response(models.Model):
    """
    Response Model

    Attributes
    answer (Answer): The answer which was chosen
    poll (Poll): The poll this response is connected to
    is_correct (bool): Whether the response was correct or not
    """

    poll = models.ForeignKey("Poll", on_delete=models.CASCADE)
    answer = models.ForeignKey("Answer", on_delete=models.CASCADE)
