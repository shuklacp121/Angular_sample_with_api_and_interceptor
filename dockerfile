FROM node:alpine
COPY . .
RUN npm install -g @angular/cli
RUN npm install
EXPOSE  5000
CMD ["ng","serve","--host", "0.0.0.0", "--disable-host-check"]