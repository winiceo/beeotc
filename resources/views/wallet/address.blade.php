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

                            <td> 购买</td>
                        </tr>
                        @endforeach

                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
