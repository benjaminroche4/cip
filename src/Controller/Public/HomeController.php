<?php

namespace App\Controller\Public;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route(
        path: [
            'fr' => '/{_locale}/',
            'en' => '/{_locale}/',
        ],
        name: 'app_home')]
    public function index(): Response
    {
        return $this->render('public/home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
