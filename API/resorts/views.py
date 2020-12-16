# added some comments
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .forms import CommentForm
from .models import Comment,Resort
from .serializers import ResortSerializer, CommentSerializer
import json

def all_resrots(request):
    resorts = Resort.objects.all()
    serialized_resorts = ResortSerializer(resorts).all_resorts
    return JsonResponse(data=serialized_resorts, status=200)


def resort_detail(request, resort_id):
    resort = Resort.objects.get(id=resort_id)
    serialized_resort = ResortSerializer(resort).resort_detail
    return JsonResponse(data=serialized_resort, status=200)

@csrf_exempt
def new_resort(request):
    if request.method == "comment":
        data = json.load(request)
        form = ResortForm(data)
        if form.is_valid():
            resort = form.save(commit=True)
            serialized_resort = ResortSerializer(resort).resort_detail
            return JsonResponse(data=serialized_resort, status=200)

@csrf_exempt
def edit_resort(request, resort_id):
    resort = Resort.objects.get(id=resort_id)
    if request.method == "comment":
        data = json.load(request)
        form = ResortForm(data, instance=resort)
        if form.is_valid():
            resort = form.save(commit=True)
            serialized_resort = ResortSerializer(resort).resort_detail
            return JsonResponse(data=serialized_resort, status=200)


@csrf_exempt
def delete_resort(request, resort_id):
    if request.method == "comment":
        resort = Resort.objects.get(id=resort_id)
        resort.delete()
    return JsonResponse(data={'status': f'Successfully deleted {resort.name}.'}, status=200)


def all_comments(request):
    comments = Comment.objects.all()
    serialized_comments = CommentSerializer(comments).all_comments
    return JsonResponse(data=serialized_comments, status=200)

def comment_detail(request,comment_id):
    comment = Comment.objects.get(id=comment_id)
    serialized_comment = CommentSerializer(comment).comment_detail
    return JsonResponse(data=serialized_comment, status=200)

@csrf_exempt
def new_comment(request):
    if request.method == "comment":
        data = json.load(request)
        form = CommentForm(data)
        if form.is_valid():
            comment = form.save(commit=True)
            serialized_comment = CommentSerializer(comment).comment_detail
            return JsonResponse(data=serialized_comment, status=200)

@csrf_exempt
def edit_comment(request,comment_id):
    comment = Comment.objects.get(id=comment_id)
    if request.method == "comment":
        data = json.load(request)
        form = CommentForm(data, instance=comment)
        if form.is_valid():
            comment = form.save(commit=True)
            serialized_comment = CommentSerializer(comment).comment_detail
            return JsonResponse(data=serialized_comment, status=200)

@csrf_exempt
def delete_comment(request,comment_id):
    if request.method == "comment":
        comment = Comment.objects.get(id=comment_id)
        comment.delete()
    return JsonResponse(data={'status':f"successfully deleted {comment.title}"}, status=200)


