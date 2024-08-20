<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\Product\ProductPageService;
use Illuminate\Support\Facades\Session;
use App\Models\Package;
use App\Models\PackagesProduct;

class ProductPackageController extends Controller
{
    public function store(Request $request, $packageId)
    {
        $package = Package::findOrFail($packageId);

        $packageProduct = new PackagesProduct();
        $packageProduct->package_id = $package->id;
        $packageProduct->product_id = $request->input('product_id');
        $packageProduct->quantity = $request->input('quantity');
        $packageProduct->price = $request->input('price');

        $packageProduct->save();

        return response()->json($packageProduct, 201);
    }

    public function destroy($packageId, $productId)
    {
        $packageProduct = PackagesProduct::where('package_id', $packageId)
            ->where('product_id', $productId)
            ->firstOrFail();

        $packageProduct->delete();

        return response()->json(null, 204);
    }
}
