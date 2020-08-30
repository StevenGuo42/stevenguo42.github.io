---
layout: post
title: "Testing GitHub Pages site locally with Jekyll on Windowns 10"
date: 2020-08-29
---

This is a beginner-friendly tutorial based on [Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll)
on [GitHub Docs](https://docs.github.com/en). 

Before you start:

1. You need to have a GitHub Pages site with Jekyll. Here is a tutorial on [how to create and host GitHub Pages site](http://jmcglone.com/guides/github-pages/), 

2. Have a Windows 10 PC and have WSL (Windows Subsystem for Linux) installed. Here is a tutorial on [How to install WSL on Windows 10](https://www.windowscentral.com/install-windows-subsystem-linux-windows-10).

3. Have your publishing source for your site cloned to your PC. Read more about [Publishing sources for GitHub Pages sites](https://docs.github.com/en/github/working-with-github-pages/about-github-pages#publishing-sources-for-github-pages-sites) 
and [cloning a GitHub repository](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository).

First, you need to install Jekyll in you WSL:

{% highlight bash linenos %}
#update repo lists and packages
sudo apt-get update -y && sudo apt-get upgrade -y
#install Ruby with a repository from BrightBox
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install ruby2.5 ruby2.5-dev build-essential dh-autoreconf
#update ruby gem
sudo gem update
#install Jekyll and bundler
sudo gem install jekyll bundler
{% endhighlight %}


Then change your directory to the publishing source:

{% highlight bash %}
cd /path/to/dir/GitHub/example.github.io
{% endhighlight %}

Create `Gemfile` contains the following dependencies:

{% highlight bash linenos %}
source 'https://rubygems.org'
gem 'nokogiri'
gem 'rack', '~> 2.0.1'
gem 'rspec'
gem "jekyll", "~> 4.0"
{% endhighlight %}

Install dependencies:

{% highlight bash %}
sudo bundle install
{% endhighlight %}

In this process you may get errors on one or more dependencies. To solve this, the dependencies need to be install manually. 
Here is an example for installing `nokogiri`:

<figure class="highlight">
<pre>
$ sudo bundle install
.
.
.
<span style="color:red">
An error occurred while installing nokogiri (1.10.10), and Bundler cannot continue.
Make sure that `gem install nokogiri -v '1.10.10' --source 'https://rubygems.org/'` succeeds before bundling.
</span>
In Gemfile:
  nokogiri
</pre>
</figure>

{% highlight bash %}
sudo gem install nokogiri bundler
{% endhighlight %}

Finally, run the Jekyll site locally:
{% highlight bash %}
bundle exec jekyll serve
{% endhighlight %}

To preview your site navigate to [http://localhost:4000](http://localhost:4000)

