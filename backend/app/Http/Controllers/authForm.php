<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class authForm extends Controller
{
    function login(Request $request) {
        return $request->input();
    }
}
