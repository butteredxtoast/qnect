<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Allow either email or phone to be optional
        $request->validate([
            'connectType' => 'required|string',
            'contactValue' => 'required_if:connectType,Email,Phone|string',
        ]);

        // Store the contact info in the database
        Contact::create([
            'email' => $request->connectType === 'Email' ? $request->contactValue : null,
            'phone' => $request->connectType === 'Phone' ? $request->contactValue : null,
        ]);

        return redirect()->back()->with('success', 'Contact information saved successfully.');
    }
}
