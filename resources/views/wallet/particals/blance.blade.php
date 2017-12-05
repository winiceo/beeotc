<div style="width:100%;padding:20px; background-color: #0c0c0c;height: 200px">

        @foreach($balances as $balance)
        <ul style="float:left; padding-right: 100px; color:red;">
            <li class="moneyinfo">
                <h3 style="color:#eee;font-size: 14px;font-weight: normal;line-height: 40px;">{{$balance->coin_name}}钱包余额：</h3>
                <p class="p_new">可用：<span class="span_new span_new1">@coin(($balance->total_balance-$balance->block_balance))</span>
                     </p>
                <p class="p_new">冻结：<span class="span_new span_new1">@coin($balance->block_balance)</span>
                     </p>
                <p class="p_new">总计：<span class="span_new span_new2">@coin($balance->total_balance)</span>
                     </p>
            </li>
        </ul>
        @endforeach

</div>