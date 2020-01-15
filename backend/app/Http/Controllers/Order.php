<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Order extends Controller
{
    function order(Request $request) {
        return $request->input();
    }
}
