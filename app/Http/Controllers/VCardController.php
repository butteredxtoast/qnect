<?php

namespace App\Http\Controllers;

use JeroenDesloovere\VCard\VCard;

class VCardController extends Controller
{
    public function download()
    {
        // Create a new vCard
        $vcard = new VCard();

        // Add details to the vCard (customize this with your actual data)
        $vcard->addName('Keuth', 'Bill');
        $vcard->addEmail('bill@hey.com');
        $vcard->addURL('https://linkedin.com/in/billkeuth');

        // Return the vCard for download
        return response($vcard->getOutput(), 200, [
            'Content-Type' => 'text/vcard',
            'Content-Disposition' => 'attachment; filename="bill_keuth.vcf"',
        ]);
    }
}
