<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;
use App\Models\GceCaracteristicas;

class CaracteristicasController extends Controller
{
    
    private $model;

    public function __construct()
    {
        $this->model = new GceCaracteristicas();
    }

    /** Trae los registros de computadores */
    public function getAll()
    {
        $response = $this->model->get();                    
        echo json_encode($response);
    }

    /** Añade un registro a la tabla de características */
    public function addOne(Request $request)
    {
        $data = $request->json()->all();
        Log::info($data);
        $this->model->gce_nombre_equipo = isset($data['gce_nombre_equipo']) ? $data['gce_nombre_equipo'] : null;
        $this->model->gce_procesador = isset($data['gce_procesador']) ? $data['gce_procesador'] : null;
        $this->model->gce_disco_duro = isset($data['gce_disco_duro']) ? $data['gce_disco_duro'] : null;
        $this->model->gce_pantalla = isset($data['gce_pantalla']) ? $data['gce_pantalla'] : null;
        $this->model->gce_grafica = isset($data['gce_grafica']) ? $data['gce_grafica'] : null;
        $this->model->gce_teclado = isset($data['gce_teclado']) ? $data['gce_teclado'] : null;
        $this->model->gce_estado = isset($data['gce_estado']) ? $data['gce_estado'] : null;
        $this->model->gce_board = isset($data['gce_board']) ? $data['gce_board'] : null;
        $this->model->gce_mouse = isset($data['gce_mouse']) ? $data['gce_mouse'] : null;
        $this->model->gce_case = isset($data['gce_case']) ? $data['gce_case'] : null;
        $this->model->gce_ram = isset($data['gce_ram']) ? $data['gce_ram'] : null;
    
        $response = $this->model->save();
        echo json_encode($response);
    }

    /** Trae un computador con base en su id */
    public function getOne($gce_id)
    {
        $this->model->gce_id = isset($gce_id) ? $gce_id : null;
        $response = $this->model->find($gce_id);
        if ($this->model->gce_id === null) {
        } else {
            echo json_encode($response);
        }
        }
}
