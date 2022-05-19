<?php


use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Location;
use WordPlate\Acf\Fields\FlexibleContent;
use WordPlate\Acf\Fields\Layout;


add_action('acf/init', function() {
    register_extended_field_group([
        'title' => 'Groupe de champs pour pages',
        'hide_on_screen' => ['the_content'],
        'fields' => [
            FlexibleContent::make('Blocs', 'blocks')
                ->instructions('Ajouter un bloc.')
                ->buttonLabel('Ajouter un bloc')
                ->layouts([
                    Layout::make('Bloc Header', 'header')
                        ->fields([
                            Text::make('Titre1'),
                            Text::make('Description'),
                            Text::make('sex')
                        ]),
                    Layout::make('Bloc Call to action', 'cta')
                        ->fields([
                            Text::make('Titre1'),
                        ]),


             

                ])
                ->required()
            
          
        ],
        'location' => [
            Location::where('post_type', 'page')
        ],
    ]);
});


