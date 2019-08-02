<?php

use Illuminate\Database\Seeder;
// Importado CRUDLaravel5.4-Vue
use App\Task;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Task::class, 5)->create();
    }
}
