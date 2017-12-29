


<div class=" ">
    <div class="usncont">
        <div>

            <div class="table_trade">
                <table>
                    <tbody>

                    <tr>
                        <th>币种名称</th>
                        <th>钱包标识</th>
                        <th>钱包地址</th>
                        <th>添加时间</th>
                        <th>操作</th>
                    </tr>

                    @forelse($addresss as $address)


                        <tr>
                            <td>{{  $address->coin_type }}</td>
                            <td>{{ $address->wallet_name }}</td>
                            <td>{{ $address->wallet_address }}</td>
                            <td>{{ $address->created_at }}</td>

                            <td><a href="{{url('user/wallet/deposit',['id'=>$address->id])}}" >充值</a>&nbsp;&nbsp;&nbsp;<a href="{{url('user/wallet/withdraw',['id'=>$address->id])}}">提币</a> </td>
                        </tr>
                        @endforeach

                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
