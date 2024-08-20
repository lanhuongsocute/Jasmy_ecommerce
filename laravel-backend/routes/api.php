<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\User\UserController;

use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ProductController;
//use App\Http\Controllers\Admin\ProductListShopController;
use App\Http\Controllers\Admin\ProductDetailController;
use App\Http\Controllers\Admin\ProductCartController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\Admin\FavouriteController;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\MyListController;
use App\Http\Controllers\Admin\GoodsController;
use App\Http\Controllers\ProductPackageController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


/////////////// User Login API Start ////////////////////////

// Login Routes
Route::post('login', [AuthController::class, 'Login']);

// Register Routes
Route::post('/register', [AuthController::class, 'Register']);

// Forget Password Routes
Route::post('/forgetpassword', [ForgetController::class, 'ForgetPassword']);

// Reset Password Routes
Route::post('/resetpassword', [ResetController::class, 'ResetPassword']);

// Current User Route
Route::get('/user', [UserController::class, 'User'])->middleware('auth:api');

/////////////// End User Login API Start ////////////////////////

// Get Visitor
Route::get('/getvisitor', [VisitorController::class, 'GetVisitorDetails']);

// Contact Page Route
Route::post('/postcontact', [ContactController::class, 'PostContact']);

// Site Infro Route
Route::get('/siteinfo', [AboutController::class, 'getSiteInfo']);

// All Category Route
Route::get('/allcats', [CategoryController::class, 'allCats']);

// ProductList Route
Route::get('/all', [ProductController::class, 'GetAllProduct']);
Route::get('/productlistbyremark/{remark}', [ProductController::class, 'ProductListByRemark']);

Route::get('/productlistbycategory/{category}', [ProductController::class, 'ProductListByCategory']);

Route::get('/productlistbysubcategory/{category}/{subcategory}', [ProductController::class, 'ProductListBySubcategory']);

// Slider Route
Route::get('/allsliders', [SliderController::class, 'AllSliders']);

// Product Details Route
Route::get('/productdetails/{id}', [ProductDetailController::class, 'ProductDetail']);

//Notification Route
Route::get('/notification', [NotificationController::class, 'NotificationHistory']);

//Search Route
Route::get('/search/{key}', [ProductController::class, 'ProductListBySearch']);

// Similar Product Route
Route::get('/similar/{subcategory}', [ProductController::class, 'SimilarProduct']);

// Favourite Route
Route::get('/favourite/{product_code}/{email}', [FavouriteController::class, 'AddFavourite']);

Route::get('/favouritelist/{email}', [FavouriteController::class, 'FavouriteList']);

Route::get('/favouriteremove/{product_code}/{email}', [FavouriteController::class, 'FavouriteRemove']);


//---------------Cart Route--------------------------------
// ProductPackages Cart Route
Route::get('/notification', [GoodsController::class, 'notification'])->name('notification');

#Notification
Route::get('notification/{goods}', [GoodsController::class, 'shownotification']);
Route::post('notification/{goods}', [GoodsController::class, 'updatenotification']);
//New Package
//Tạo PK
Route::post('add-package', [PackageController::class, 'index']);

//Hàm tạo gói riêng
Route::get('/packages', 'PackageController@index');
Route::get('/packages/{id}', 'PackageController@show');
Route::post('/packages', 'PackageController@store');
Route::put('/packages/{id}', 'PackageController@update');
Route::delete('/packages/{id}', 'PackageController@destroy');

Route::post('/packages/{packageId}/products', 'PackageProductController@store');
Route::delete('/packages/{packageId}/products/{productId}', 'PackageProductController@destroy');

Route::post('/addtocart', [ProductCartController::class, 'addToCart']);

Route::get('carts', [CartController::class, 'show']);

Route::get('carts/{cartID}', [CartController::class, 'view']);
Route::post('carts/{cartID}', [CartController::class, 'addCartId']);

Route::get('carts/delete/{cartID}/{id}', [CartController::class, 'remove']);
Route::post('carts', [CartController::class, 'addCart']);

//Mylist
Route::get('gio-hang-cua-toi', [MyListController::class, 'index']);

Route::get(
    'goi/{id}',
    [MyListController::class, 'show']
);
Route::post(
    'goi/{id}',
    [MyListController::class, 'update']
);

Route::post('goi/{id}/updateinfo', [MyListController::class, 'updatePK']);

Route::post('/orders', 'OrderController@store');

/*================================================*/
Route::get('/cartcount/{product_code}', [ProductCartController::class, 'CartCount']);
// Cart Count Route
Route::get('/cartcount/{email}', [ProductCartController::class, 'CartCount']);

// Cart List Route
Route::get('/cartlist/{email}', [ProductCartController::class, 'CartList']);

Route::get('/removecartlist/{id}', [ProductCartController::class, 'RemoveCartList']);

Route::get('/cartitemplus/{id}/{quantity}/{price}', [ProductCartController::class, 'CartItemPlus']);

Route::get('/cartitemminus/{id}/{quantity}/{price}', [ProductCartController::class, 'CartItemMinus']);

// Cart Order Route
Route::post('/cartorder', [ProductCartController::class, 'CartOrder']);

Route::get('/orderlistbyuser/{email}', [ProductCartController::class, 'OrderListByUser']);
//---------------Cart Route End--------------------------------

// Post Product Review Route
Route::post('/postreview', [ReviewController::class, 'PostReview']);

// Review Product Route
Route::get('/reviewlist/{id}', [ReviewController::class, 'ReviewList']);
