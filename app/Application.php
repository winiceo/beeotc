<?php
/**
 * User: surprisepeas
 * Date: 2017/6/4 17:51
 */

namespace App;

use InvalidArgumentException;
use Illuminate\Foundation\Application as IlluminateApplication;


/**
 * 重写一些默认规则
 */
class Application extends IlluminateApplication
{
	/**
	 * We have merged public path and base path.
	 *
	 * @return string
	 */
	public function publicPath()
	{
		return $this->basePath;
	}

	/**
	 * Loads a revision'ed asset file, making use of gulp-rev
	 * This is a copycat of L5's Elixir, but catered to our directory structure.
	 *
	 * @param string $file
	 * @param string $manifestFile
	 *
	 * @throws \InvalidArgumentException
	 *
	 * @return string
	 */
	public function rev($file, $manifestFile = null)
	{
		static $manifest = null;

		$manifestFile = $manifestFile ?: $this->publicPath() . '/public/build/rev-manifest.json';

		if ($manifest === null) {
			$manifest = json_decode(file_get_contents($manifestFile), true);
		}

		if (isset($manifest[$file])) {
			return $this->staticUrl("public/build/{$manifest[$file]}");
		}

		throw new InvalidArgumentException("File {$file} not defined in asset manifest.");
	}

	/**
	 * 是否静态CDN加速
	 * 如果配置cdn配置项走CDN加速链接
	 * 没有的话就走完整URL路径
	 *
	 * @param null $name
	 * @return string
	 */
	public function staticUrl($name = null)
	{
		$cdnUrl = trim(config('shake.cdn.url'), '/ ');

		return $cdnUrl ? $cdnUrl . '/' . trim(ltrim($name, '/')) : trim(asset($name));
	}
}