FROM python:3.11-slim
WORKDIR /app
RUN pip install --no-cache-dir django djangorestframework
COPY . .
EXPOSE 8080
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8080" ]