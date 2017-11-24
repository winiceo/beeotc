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
                <tr><td colspan="8" align="center">暂无数据</td></tr>
                @forelse($orders as $order)


                    <tr>
                        <td style="padding-left:40px;"> {{  $order->id }}</td>
                        <td>
                            @if($order->trade_type=='ONLINE_SELL')
                                购买
                            @elseif($order->trade_type=='ONLINE_BUY')
                                出售
                            @endif

                                @if($order->crypto_currency=='1')
                                    比特币
                                @elseif($order->crypto_currency=='2')
                                    以太币
                                @endif



                        </td>
                        <td>{{$order->country_code}}</td>

                        <td>
                            {{$order->price}}
                        </td>
                        <td>{{$order->margin}}% </td>
                        <td>{{$order->created_at}}</td>
                        <td>
                            @if($order->crypto_currency=='1')
                                比特币
                            @elseif($order->crypto_currency=='2')
                                以太币
                            @endif
                        </td>
                        <td><a href="{{route('bee.ad.edit',$order->id)}}">编辑</a> <a href="#" onclick='ground({{$order->id}})'>下架</a></td>
                    </tr>
                    @endforeach

                </tbody></table>
            <div class="pages"></div>
        </div>
    </div>
@endsection

@section('scripts')
<script>

    function ground(id){
            axios.post('/api/ad/ground', {
                id: id
                
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });



    }
</script>


@endsection


