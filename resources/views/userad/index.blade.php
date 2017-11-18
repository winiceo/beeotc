@extends('userad.layout')

@section('userright')

    <div class="usnc_right">
        <h1>
            出售广告				<div class="xr">
                <a class="on" href="/User/myad.html?type=1&amp;state=1">进行中</a>
                <a href="/User/myad.html?type=1&amp;state=2">已下架</a>
            </div>
        </h1>
        <!-- <a class="on" href="/User/myad/type/1/state/1.html">进行中</a>
        <a  href="/User/myad/type/1/state/2.html">已下架</a>
        <a  href="/User/myad/type/1/state/3.html">已完成</a> -->
        <div class="recharge_list">
            <table>
                <tbody><tr>
                    <th width="100px">编号</th>
                    <th width="150px">广告类型</th>
                    <th width="100px">国家</th>
                    <th width="150px">价格</th>
                    <th width="100px">溢价比例</th>
                    <th width="230px">创建时间</th>
                    <th width="110px">状态</th>
                    <th width="130px">操作</th>
                </tr>
                <tr><td colspan="8" align="center">暂无数据</td></tr>				</tbody></table>
            <div class="pages"></div>
        </div>
    </div>
@endsection