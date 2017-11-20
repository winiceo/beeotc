<div class="panel panel-info">
    <div class="panel-heading">BTC</div>

    <div class="list-group">
        <a href="{{ url('trade/buy/btc') }}" class="list-group-item {{ isActive('setting.index') }}">
            <i class="ion-ios-barcode-outline"></i>我要买入
        </a>

        <a href="{{ url('trade/sell/btc') }}" class="list-group-item {{ isActive('setting.index') }}">
            <i class="ion-ios-barcode-outline"></i>我要卖出
        </a>

    </div>
</div>
 <div class="panel panel-info">
    <div class="panel-heading">ETH</div>

    <div class="list-group">
        <a href="{{ url('trade/buy/eth') }}" class="list-group-item {{ isActive('setting.index') }}">
            <i class="ion-ios-barcode-outline"></i>我要买入
        </a>

        <a href="{{ url('trade/sell/eth') }}" class="list-group-item {{ isActive('setting.index') }}">
            <i class="ion-ios-barcode-outline"></i>我要卖出
        </a>

    </div>
</div>
