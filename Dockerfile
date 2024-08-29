# Use the official Jekyll image
FROM jekyll/jekyll:latest

# Set the working directory in the container
WORKDIR /srv/jekyll

# Install the required Bundler version
RUN apt install ruby-full -y
RUN gem install bundler -v 2.4.22

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile /srv/jekyll/
COPY Gemfile.lock /srv/jekyll/

# Install dependencies
RUN bundle install

# Copy the site content into the container
COPY . /srv/jekyll