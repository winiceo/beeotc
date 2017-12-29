
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css">
        .upchatpic{position:absolute;font-size: 100px;right: 10px;top: -15px;opacity: 0;filter: alpha(opacity=0);cursor: pointer;width:40px;height:40px;}
    </style>
    <script type="text/javascript" src="/plugins/jquery/dist/jquery.js"></script>
</head>
<body style="width:40px;height:40px;background:url('/images/upload.jpg') center 10px no-repeat;overflow:hidden;position:relative;">
<form name="theform" enctype="multipart/form-data" method="post" action="/chat/upload">

    {{ csrf_field() }}

    <input type="hidden" name="orderid" value="{{$orderid}}" />

    <input name="upchatpic" class="upchatpic" type="file" />
</form>
<script type="text/javascript">
    $(".upchatpic").bind('change input',function(){
        var pic = $(this).val();
        if(pic==''||pic=='undefined'){
            alert("请选择要上传的图片！");
            return false;
        }
        document.theform.submit();
    });
</script>
</body>
</html>