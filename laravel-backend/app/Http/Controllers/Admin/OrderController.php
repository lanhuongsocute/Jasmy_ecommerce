<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Store a newly created order in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate request data
        $request->validate([
            'customer_id' => 'required|exists:users,id',
            'cart_id' => 'required',
            'user_id' => 'required|exists:users,id',
            'total' => 'required|numeric|min:0',
            'status' => 'required|string|max:255',
        ]);

        // Create a new order instance
        $order = new Order();
        $order->customer_id = $request->input('customer_id');
        $order->cart_id = $request->input('cart_id');
        $order->user_id = $request->input('user_id');
        $order->total = $request->input('total');
        $order->status = $request->input('status');

        // Save the order to database
        $order->save();

        // Optionally, you can return a response here (e.g., JSON response)
        return response()->json([
            'message' => 'Order created successfully',
            'order' => $order
        ], 201); // HTTP status code 201 means Created
    }
}
