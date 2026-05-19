<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
 public function index()
    {
        return response()->json(Book::all(), 200);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
  public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3',
            'author' => 'required',
            'year' => 'nullable|integer'
        ]);

        $book = Book::create($request->all());

        return response()->json([
            'message' => 'Livre ajouté avec succès',
            'data' => $book
        ], 201);
    }


    /**
     * Display the specified resource.
     */
        public function show($id)
    {
        $book = Book::find($id);

        if (!$book) {

             return response()->json([
                'message' => 'Livre introuvable'
            ], 404);
        }

        return response()->json($book, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
  public function update(Request $request, $id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json([
                'message' => 'Livre introuvable'
            ], 404);
        }

        $book->update($request->all());

        return response()->json([
            'message' => 'Livre modifié avec succès',
            'data' => $book
        ], 200);
    }



    /**
     * Remove the specified resource from storage.
     */
public function destroy($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json([
                'message' => 'Livre introuvable'
            ], 404);
        }

        $book->delete();

        return response()->json([
            'message' => 'Livre supprimé avec succès'
        ], 200);
    }
}

