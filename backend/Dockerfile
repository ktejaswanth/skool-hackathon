# Use Java 17
FROM openjdk:17-jdk-slim

# Copy app JAR (after build)
COPY target/*.jar app.jar

# Start container
ENTRYPOINT ["java", "-jar", "/app.jar"]
