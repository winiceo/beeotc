@extends('layouts.rss')

@section('content')
    @each('site.posts.feed/_show', $posts, 'post')
@endsection
