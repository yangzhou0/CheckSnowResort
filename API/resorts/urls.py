from django.urls import path
from . import views
app_name = 'resorts'
urlpatterns = [
    path('resrots', views.all_resrots, name='all_resrots'),
    path('resrots/<int:resort_id>', views.resort_detail, name='resort_detail'),
    path('resrots/<int:resort_id>/like', views.like_resort, name='like_resort'),
    path('resorts/<int:resort_id>/comments', views.resort_comments, name='resort_comments'),
    path('comments/new', views.new_comment, name='new_comment'),
    path('comments/<int:comment_id>', views.comment_detail, name='comment_detail'),
    path('comments/<int:comment_id>/delete', views.delete_comment, name='delete_post'),
    path('comments/<int:comment_id>/edit', views.edit_comment, name='edit_comment'),
]