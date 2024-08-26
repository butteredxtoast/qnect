<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'connectType' => 'required|string',
            'contactValue' => 'required|string',
        ]);
        Log::info("catdog Request name: ", [$request->name]);

        Contact::create([
            'name' => $request->name,
            'email' => $request->connectType === 'email' ? $request->contactValue : null,
            'phone' => $request->connectType === 'phone' ? $request->contactValue : null,
        ]);

        return redirect()->back()->with('success', 'Contact information saved successfully.');
    }
}
