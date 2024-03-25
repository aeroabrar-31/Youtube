import React from "react";

class ContentDetector extends React.Component {
  detectContent(text) {
    // Regular expression to match URLs
    var urlRegex = /(https?:\/\/[^\s]+)/g;

    // Regular expression to match hashtags
    var hashtagRegex = /#(\w+)/g;

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
