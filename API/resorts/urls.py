from django.urls import path
from . import views
app_name = 'resorts'
urlpatterns = [
    path('resrots', views.all_resrots, name='all_resrots'),
    path('resrots/<int:resort_id>', views.resort_detail, name='resort_detail'),
    path('resrots/<int:resort_id>/new', views.add_resort, name='add_resort'),
    path('resrots/<int:resort_id>/edit', views.edit_resort, name='edit_resort'),
    path('resrots/<int:resort_id>/delete', views.delete_resort, name='delete_resort'),
    path('resrots/<int:resort_id>/like', views.like_resort, name='like_resort'),
    path('resorts/<int:resort_id>/comments', views.resort_comments, name='resort_comments'),
    path('resorts/<int:resort_id>/comments/new', views.new_comment, name='new_comment'),
    path('comments/<int:comment_id>/like', views.like_comment, name='like_comment'),
    path('comments/<int:comment_id>/delete', views.delete_comment, name='delete_post'),
]