<?php
namespace App\Helpers;

use App\Models\PackagesProduct;
use Illuminate\Support\Str;

class helper{
    public static function menu($menus, $parent_id = 0, $char =''){
        $html='';
        $char_ ='|--';
        foreach($menus as $key=>$menu){
            if($menu->parent_id == $parent_id){
                $html .= '
                <tr>
                <td>'.$menu->id.'</td>
                <td>'.$char.$menu->name.'</td>
                <td>'.self::active($menu->active).'</td>
                <td>'.$menu->updated_at.'</td>
                <td>
                <a class="btn btn-primary btn-sm" href="/admin/menus/edit/'.$menu->id.'"><i class="fa-solid fa-pen-to-square"></i></a>
                <a class="btn btn-danger btn-sm" href="#" onclick="removeRow('.$menu->id.',\'/admin/menus/destroy\')"><i class="fa-solid fa-trash-can"></i>
                </a>
                </td>
                </tr>';
            }
            unset($menus[$key]);
            $html .= self::menu($menus, $menu->id, $char_);
        }
        return $html;
    }
    public static function product($products){
        $html='';
        
        foreach($products as $key=>$product){
            $price = $product->price;
            $sale = $product->price_sale;
            $price_sale =$price-(($price*$sale)/100);
            $menus = \App\Models\Menu::select('name')->where('id', '=', $product->menu_id)->get();
            foreach($menus as $k=>$menu){
                $name = $menu->name;
            }
            $html .= '
                <tr>
                <td>'.$product->id.'</td>
                <td>'.$product->name.'</td>
                <td>'.$name.'</td>
                <td>'.$product->price.'</td>
                <td>'.$price_sale.'</td>
                <td><img src="'.$product->image.'"width="100" height="100"></td>
                <td>'.self::active($product->active).'</td>
                <td>
                <a class="btn btn-primary btn-sm" href="/admin/products/edit/'.$product->id.'"><i class="fa-solid fa-pen-to-square"></i></a>
                <a class="btn btn-danger btn-sm" href="#" onclick="removeRow('.$product->id.',\'/admin/products/destroy\')"><i class="fa-solid fa-trash-can"></i>
                </a>
                </td>
                </tr>';
            unset($products[$key]);
        }
        return $html;
    }

    public static function slider($sliders){
        $html = '';
        foreach($sliders as $key=>$slider){
            $html.='<tr>
            <td>'.$slider->id.'</td>
            <td>'.$slider->name.'</td>
            <td>'.$slider->url.'</td>
            <td><img src="'.$slider->thumb.'"width="100" height="100"></td>
            <td>'.$slider->sort_by.'</td>
            <td>'.self::active($slider->active).'</td>
            <td>
            <a class="btn btn-primary btn-sm" href="/admin/sliders/edit/'.$slider->id.'"><i class="fa-solid fa-pen-to-square"></i></a>
            <a class="btn btn-danger btn-sm" href="#" onclick="removeRow('.$slider->id.',\'/admin/sliders/destroy\')"><i class="fa-solid fa-trash-can"></i>
            </a>
            </td>
            </tr>';
        }
        return $html;
    }

    public static function active($active = 0){
        return $active == 0? '<span class="btn btn-danger btn-xs">No</span>':'<span class="btn btn-success btn-xs">Yes</span>';
    }

    //Tạo function đệ quy
    public static function menus($menus, $parent_id = 0) :string
    {
        $html = '';
        foreach ($menus as $key => $menu) {
            if ($menu->parent_id == $parent_id) {
                $html .= '
                    <li>
                        <a href="/danh-muc/' . $menu->id . '-' . Str::slug($menu->name, '-') . '.html">
                            ' . $menu->name . '
                        </a>';

                unset($menus[$key]);

                if (self::isChild($menus, $menu->id)) {
                    $html .= '<ul class="sub-menu">';
                    $html .= self::menus($menus, $menu->id);
                    $html .= '</ul>';
                }

                $html .= '</li>';
            }
        }

        return $html;
    }

    public static function isChild($menus, $id) : bool
    {
        foreach ($menus as $menu) {
            if ($menu->parent_id == $id) {
                return true;
            }
        }

        return false;
    }

    public static function price($price = 0, $price_sale = 0){
        if($price_sale != 0){
            return number_format($price - (($price * $price_sale)/100)) ;
        }
        if($price != 0){
            return number_format($price) ;
        }
    }


    public static function goods($goods){
        $html='';
        
        foreach($goods as $key=>$product){
            $price = PackagesProduct::where('subscription_package_id',$product->id)->sum('price');
            $users = \App\Models\User::select('name')->where('id', '=', $product->user_id)->get();
            foreach($users as $k=>$user){
                $name = $user->name;
            }
            $html .= '
                <tr>
                <td>'.$product->id.'</td>
                <td>'.$product->user_id.'</td>
                <td>'.$name.'</td>
                <td>'.$product->name_package.'</td>
                <td>'.number_format($price, 0, '.', '.').'</td>
                <td>
                <a class="btn btn-primary btn-sm" href="/admin/goods/edit/'.$product->id.'"><i class="fa-solid fa-pen-to-square"></i></a>
              
                </td>
                </tr>';
            unset($goods[$key]);
        }
        return $html;
    }
}
?>
