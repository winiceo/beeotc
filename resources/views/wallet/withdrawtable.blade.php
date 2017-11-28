


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

                    @forelse($withdraws as $withdraw)


                        <tr>
                            <td>{{  $withdraw->address }}</td>
                            <td>{{  $withdraw->address }}</td>
                            <td>{{  $withdraw->address }}</td>
                            <td>{{  $withdraw->address }}</td>
                            <td>{{  $withdraw->address }}</td>


                         </tr>
                        @endforeach

                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
