<?php

namespace detecmedia\DemoBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;

class DemoBundle extends AbstractPimcoreBundle
{
    /**
     * @return array
     */
    public function getJsPaths()
    {
        return [
            '/bundles/demo/js/pimcore/admin-demo-bundle.js', // add another js-file
            '/bundles/demo/js/pimcore/startup.js'
        ];
    }

    /**
     * @return string
     */
    public function getVersion()
    {
        return '1.0.0';
    }
}
