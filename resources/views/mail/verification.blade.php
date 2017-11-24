@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-header">验证成功</div>

                    <div class="card-body">
                       已发送  {{$user->email()}},请验证
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
