import React from "react";

class ContentDetector extends React.Component {
  detectContent(text) {
    // Regular expression to match URLs
    var urlRegex = /(https?:\/\/[^\s]+)/g;

    // Regular expression to match hashtags
    var hashtagRegex = /#(\w+)/g;

    var emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,})/g;

    // Replace URLs with anchor tags
    text = text.replace(urlRegex, function (url) {
      return `<a href="${url}" class="text-blue-500 hover:underline">${url}</a>`;
    });

    // Replace hashtags with anchor tags
    text = text.replace(hashtagRegex, function (hashtag) {
      return `<a href="https://twitter.com/hashtag/${hashtag.substring(
        1
      )}" class="text-blue-500 hover:underline">${hashtag}</a>`;
    });

    // Replace email addresses with anchor tags
    text = text.replace(emailRegex, function (email) {
      return `<a href="mailto:${email}" class="text-blue-500 hover:underline">${email}</a>`;
    });

    return text;
  }

  render() {
    const { content } = this.props;

    // Detect and replace URLs and hashtags
    const processedContent = this.detectContent(content);

    return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
  }
}

export default ContentDetector;
