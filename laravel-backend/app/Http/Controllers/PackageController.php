<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Package;

class PackageController extends Controller
{
    public function index()
    {
        try {
            $packages = Package::all();
            return response()->json($packages);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong. Please try again.'], 500);
        }
    }

    public function show($id)
    {
        try {
            $package = Package::findOrFail($id);
            return response()->json($package);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Package not found.'], 404);
        }
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'package_num_us' => 'required|integer',
                'price' => 'required|numeric',
                'quantity' => 'required|integer',
                'day_order' => 'nullable|integer',
                'distance' => 'nullable|integer',
                'status' => 'required|in:0,1',
                'y_no' => 'nullable|string|max:255',
            ]);

            $package = new Package();
            $package->fill($validatedData);
            $package->save();

            return response()->json($package, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create package.'], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'package_num_us' => 'required|integer',
                'price' => 'required|numeric',
                'quantity' => 'required|integer',
                'day_order' => 'nullable|integer',
                'distance' => 'nullable|integer',
                'status' => 'required|in:0,1',
                'y_no' => 'nullable|string|max:255',
            ]);

            $package = Package::findOrFail($id);
            $package->fill($validatedData);
            $package->save();

            return response()->json($package);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update package.'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $package = Package::findOrFail($id);
            $package->delete();

            return response()->json(null, 204);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete package.'], 500);
        }
    }
}
