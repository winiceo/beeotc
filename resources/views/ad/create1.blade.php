@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="dicussion row">
            <div class="col-md-9 col-md-offset-1">
                <form class="form-horizontal" action="{{ url('ad/store') }}" method="POST">
                    {{ csrf_field() }}

                    <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                        <label for="title" class="col-sm-2 control-label">{{ lang('Discuss Title') }}</label>
                        <div class="col-sm-10">
                            <input type="text" id="title" name="title" class="form-control" value="{{ old('title') }}">

                            @if ($errors->has('title'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('title') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>



                    <div class="form-group{{ $errors->has('margin') ? ' has-error' : '' }}">
                        <label for="title" class="col-sm-2 control-label">{{ lang('Ad margin') }}</label>
                        <div class="col-sm-10">
                            <input type="text" id="title" name="margin" class="form-control" value="{{ old('margin') }}">

                            @if ($errors->has('margin'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('margin') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>
                    <div class="form-group{{ $errors->has('tags') ? ' has-error' : '' }}">
                        <label class="col-sm-2 control-label">{{ lang('Discuss Tag') }}</label>
                        <div class="col-sm-10">
                            <select class="select" multiple="multiple" name="tags[]" style="width: 100%">
                                @foreach($tags as $tag)
                                    <option value="{{ $tag->id }}">{{ $tag->tag }}</option>
                                @endforeach
                            </select>

                            @if ($errors->has('tags'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('tags') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>
                    <div class="form-group{{ $errors->has('content') ? ' has-error' : '' }}">
                        <label for="content" class="col-sm-2 control-label">{{ lang('Discuss Content') }}</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" id="content" rows="12" name="content">{{ old('content') }}</textarea>

                            @if ($errors->has('content'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('content') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <button type="submit" class="btn btn-success pull-right" onClick="this.form.submit(); this.disabled=true;">{{ lang('Create Discussion') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
<script type="text/javascript">
    $('.select').select2();


</script>
@endsection

@section('styles')
<style>
    .dicussion {
        margin-top: 40px;
    }
</style>
@endsection