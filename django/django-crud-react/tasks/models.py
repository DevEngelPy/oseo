from django.db import models
from django.utils.translation import gettext_lazy as _
from django.urls import reverse
# Create your models here.
class Task(models.Model):

    title = models.CharField(_("title"), max_length=200)
    description = models.TextField(_("description"), blank=True)
    done = models.BooleanField(_("done"),default=False)
    

    class Meta:
        verbose_name = _("Task")
        verbose_name_plural = _("Tasks")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Task_detail", kwargs={"pk": self.pk})
