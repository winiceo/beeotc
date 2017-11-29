<?php

if (! function_exists('admin_url')) {
    /**
     * Get admin url.
     *
     * @param  string $uri
     * @return string
     */
    function admin_url($uri)
    {
        return url('/dashboard/' . $uri);
    }
}

if(!function_exists('human_filesize')) {
    /**
     * Get a readable file size.
     *
     * @param $bytes
     * @param int $decimals
     * @return string
     */
    function human_filesize($bytes, $decimals = 2) {
        $size = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'];

        $floor = floor((strlen($bytes)-1)/3);

        return sprintf("%.{$decimals}f", $bytes/pow(1024, $floor)).@$size[$floor];
    }
}

if(!function_exists('isActive')) {
    /**
     * Determine the nav if it is the current route.
     *
     * @param string $nav
     * @return boolean
     */
    function isActive($nav) {
        return Route::currentRouteName() == $nav ? 'active' : '';
    }
}

if(!function_exists('translug')) {
    /**
     * Translate the slug to english.
     *
     * @param string $slug
     * @return string
     */
    function translug($slug) {
        return app('Translug')->translate($slug);
    }
}

if(!function_exists('lang')) {
    /**
     * Trans for getting the language.
     *
     * @param string $text
     * @param  array $parameters
     * @return string
     */
    function lang($text, $parameters = [])
    {


        return trans('trade.'.$text, $parameters);
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