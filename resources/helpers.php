<?php

if (! function_exists('active')) {
    /**
     * Sets the menu item class for an active route.
     */
    function active($routes, bool $condition = true): string
    {
        return call_user_func_array([app('router'), 'is'], (array) $routes) && $condition ? 'active' : '';
    }
}

if (! function_exists('md_to_html')) {
    /**
     * Convert Markdown to HTML.
     */
    function md_to_html(string $markdown): string
    {
        return app(App\Markdown\Converter::class)->toHtml($markdown);
    }
}




if(!function_exists('leven')) {


// 设置 配置文件;
    function leven($key = NULL, $value = NULL)
    {
        static $_config = array();
        //如果是数组,写入配置数组,以全字母大写的形式返回;
        if (is_array($key)) {
            return $_config = array_merge($_config,  ($key));
        }
        $key =  ($key);
        if (!is_null($value)) {
            return $_config[$key] = $value;
        }
        if (empty($key)) {
            return $_config;
        }
        return isset($_config[$key]) ? $_config[$key] : NULL;
    }
}
