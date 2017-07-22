# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render
from mainserver.models import UserProfile
from mainserver.serializers import UserProfileSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import response
from rest_framework.response import Response
from rest_framework.status import HTTP_202_ACCEPTED

# Create your views here.
class UserProfileView(APIView):
    serializer_class = UserProfileSerializer
    def get(self, request):
        list_of_user_profiles = UserProfile.objects.all()
        some_data = UserProfileSerializer(list_of_user_profiles, many=True)
        return Response(some_data.data)

    def post(self, request):
        some_more_data = UserProfileSerializer(data=request.data)
        some_more_data.is_valid(raise_exception = True)
        first_name = some_more_data.validated_data['firstname']
        last_name = some_more_data.validated_data['lastname']
        a_email = some_more_data.validated_data['email']
        num_ppl = some_more_data.validated_data['numppl']

        person = UserProfile(firstname = first_name, lastname = last_name, email = a_email, numppl=num_ppl)
        person.save()
        return Response(status = HTTP_202_ACCEPTED)


def index_page(request):
    list_of_user_profiles = UserProfile.objects.all()
    print (list_of_user_profiles)

    context = {'list_of_user_profiles': list_of_user_profiles}
    return render(request, 'mainserver/index.html', context)
