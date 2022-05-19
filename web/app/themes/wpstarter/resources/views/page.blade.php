@extends('layouts.app')

@section('content')
    @foreach (get_field('blocks') as $block)
        @includeIf('blocks.' . $block['acf_fc_layout'], ['block' => $block])
    @endforeach
@endsection
