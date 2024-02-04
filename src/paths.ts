const paths = {
  homePath() {
    return '/';
  },
  topciShowPath(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string){
    return `/topics/${topicSlug}/posts/${postId}/`;  }
}