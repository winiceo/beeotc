@extends('wallet.layout')

@section('userright')

    <div class="usnc_right">
        <h1>
            钱包管理
            <div class="xr">
                <a class="on" href="/User/qianbao.html?coin=btc">比特币(BTC)</a><a href="/User/qianbao.html?coin=eth">以太坊(ETH)</a>				</div>
        </h1>
        <div class="recharge_list nmt">
            <table>
                <tbody><tr>
                    <th>币种名称</th>
                    <th>钱包标识</th>
                    <th>钱包地址</th>
                    <th>添加时间</th>
                    <th>操作</th>
                </tr>
                </tbody></table>
            <div class="pages"></div>
            <div class="addbanks">
                <a href="javascript:void(0)" onclick="addAddress()">添加地址</a>
            </div>
        </div>
    </div>
@endsection