var indiceBusqueda=0;
var Alumno=[];
var Edificio=[];
var Grupo=[];
var Maestro=[];
var Aula=[];
var Recurso=[];
var Materia=[];
var Hora=[];
var disponible=[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

function inicializar(){
    $('#outPut').val("");
    indiceBusqueda=0;
    Alumno=[];
    Edificio=[];
    Grupo=[];
    Maestro=[];
    Aula=[];
    Recurso=[];
    Materia=[];
    Hora=[];
    var lin=editor.getValue().split("\n");
    for(let a of lin){
        var indice=a.indexOf(" ");
        var prop = a.substring(a.indexOf(" ")+3,a.length-3).split(" , ");
        switch(a.substring(0,indice)){
            case "Alumno":
                declaraAlumno(prop[0],prop[1],prop[2]);
                break;
            case "Edificio":
                declaraEdificio(prop[0],prop[1]);
                break;
            case "Grupo":
                declaraGrupo(prop[0],prop[1],prop[2],prop[3]);
                break;
            case "Maestro":
                declaraMaestro(prop[0],prop[1],prop[2],prop[3],prop[4],prop[5]);
                break;
            case "Aula":
                declaraAula(prop[0],prop[1],prop[2]);
                break;
            case "Recurso":
                declaraRecurso(prop[0],prop[1],prop[2]);
                break;
            case "Materia":
                declaraMateria(prop[0],prop[1],prop[2],prop[3]);
                break;
            case "Hora":
                declaraHora(prop[0],prop[1],prop[2]);
                break;

            case "AsignarRecurso":
                asignarRecurso(prop[0],prop[1]);
                break;
                
            case "AsignarGrupo":
                asignarGrupo(prop[0],prop[1]);
                break;
                /*
            case "AsignarEdificio":
                break;

            case "AsignarAula":
                break;

            case "AsignarMaestro":
                break;*/
            case "AsignarHora":
                asignarHora(prop[0],prop[1]);
                break;
/*
            case "AsignarAlumno":
                break;

            */
        }
    }
    imprimirTokio();
}
function imprimirTokio() {
    /*
    console.log(
        "Alumnos: \t"+JSON.stringify(Alumno)+"\n"+
        "Edificios: \t"+JSON.stringify(Edificio)+"\n"+
        "Grupos: \t"+JSON.stringify(Grupo)+"\n"+
        "Maestros: \t"+JSON.stringify(Maestro)+"\n"+
        "Aulas: \t"+JSON.stringify(Aula)+"\n"+
        "Recursos: \t"+JSON.stringify(Recurso)+"\n"+
        "Materias: \t"+JSON.stringify(Materia)+"\n"+
        "Horas: \t"+JSON.stringify(Hora)
    )*/
    console.log(
        "Grupos: \t"+JSON.stringify(Grupo)+"\n"+
        "Aulas: \t"+JSON.stringify(Aula)+"\n"+
        "Recursos: \t"+JSON.stringify(Recurso)+"\n"+
        "Horas: \t"+JSON.stringify(Hora))

}
function declaraAlumno(id, nombre, carrera){
    let exist=false;
    for(let a of Alumno){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de alumno.");
    }else {
        Alumno.push({id:id,nombre:nombre,carrera:carrera});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el alumno.");
    }
}
function declaraEdificio ( id , nombre ){
    let exist=false;
    for(let a of Edificio){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de edificio.");
    }else {
        Edificio.push({id:id,nombre:nombre,aulas:[]});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el edificio.");
    }
}
function declaraGrupo ( id , nombre , capacidad , carrera ){
    let exist=false;
    for(let a of Grupo){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id del grupo.");
    }else {
        Grupo.push({id:id,nombre:nombre,capacidad:capacidad,carrera:carrera,alumnos:[],recursos:[],materia:"",hora:""});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el grupo");
    }
}
function declaraMaestro ( id , nombre , E1 , S1 , E2 , S2 ){
    let exist=false;
    for(let a of Maestro){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de maestro.");
    }else {
        var temp=[];
        for(var i=S1;i<=E1;i--){
            temp.push(i);
        }
        for(var i=S2;i<=E2;i--){
            temp.push(i);
        }
        temp=temp.sort();
        Maestro.push({id:id,nombre:nombre,Entrada1:E1,Salida1:S1,Entrada2:E2,Salida2:S2,horas:temp});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el maestro.");
    }
}
function declaraAula ( id , nombre , capacidad ){
    let exist=false;
    for(let a of Aula){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Srror ya existe el id del aula.");
    }else {
        Aula.push({id:id,nombre:nombre,capacidad:capacidad,recursos:[],disponible:disponible});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el aula.");
    }
}
function declaraRecurso ( id , serie , nombre ){
    let exist=false;
    for(let a of Recurso){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id del recurso.");
    }else {
        Recurso.push({id:id,serie:serie,nombre:nombre,disponible:disponible});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente el recurso.");
    }
}
function declaraMateria ( id , nombre , carrera , creditos){
    let exist=false;
    for(let a of Materia){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de la materia.");
    }else {
        Materia.push({id:id,nombre:nombre,carrera:carrera,creditos:creditos});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente la materia.");
    }
}
function declaraHora ( id , dias , hora ){
    let exist=false;
    for(let a of Hora){
        if(a.id==id){
            exist=true;
        }
    }
    if(exist){
        $('#outPut').val($('#outPut').val()+"\n"+"Error ya existe el id de la hora.");
    }else {
        Hora.push({id:id,dias:dias,hora:hora});
        $('#outPut').val($('#outPut').val()+"\n"+"Se guardo correctamente la hora.");
    }
}


function asignarHora ( idHora , idGrupo ){
    var hora=buscarHoraID(idHora);
    if(hora){
        var grupo=buscarGrupoID(idGrupo);
        if(grupo){
            grupo.hora=hora.hora;
            $('#outPut').val($('#outPut').val()+"\n"+"Se asignó la hora correctamente.");
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra grupo con id= "+idGrupo+"-");
        }
    }else{
        $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra hora con id= "+idHora+".");
    }
}

//idRec, aul o Mat
function asignarRecurso ( Rec, aulGrup ){
    var recurso=buscarRecNom(Rec);
    if(recurso){
        var grupo=buscarGrupoID(aulGrup);
        if(grupo){
            if(grupo.materia==""){
                $('#outPut').val($('#outPut').val()+"\n"+"Primero debe asignarse una materia al grupo con id= "+aulGrup+".");
            }else if(grupo.hora==null){
                $('#outPut').val($('#outPut').val()+"\n"+"Primero debe asignarse una hora al grupo con id= "+aulGrup+".");
            }else{
                if(Grupo[indiceBusqueda].recursos.length==0){
                    Grupo[indiceBusqueda].recursos.push(Rec);
                    $('#outPut').val($('#outPut').val()+"\n"+"Se asignó el recurso.");
                }else{
                    let existe=false;
                    for(let a of Grupo[indiceBusqueda].recursos){
                        if(a==Rec){
                            existe=true;
                        }
                    }
                    if(existe){
                        $('#outPut').val($('#outPut').val()+"\n"+"Ya existe el recurso para el grupo.");
                    }else{
                        Grupo[indiceBusqueda].recursos.push(Rec);
                        $('#outPut').val($('#outPut').val()+"\n"+"Se asignó el recurso.");
                    }
                }
            }
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra grupo con id= "+aulGrup+".");
        }

    }else{
        recurso=buscarRecId(Rec);
        if(recurso){
            var aula=buscarAulaID(aulGrup);
            if(aula){
                if(Aula[indiceBusqueda].recursos.length==0){
                    Aula[indiceBusqueda].recursos.push(Rec);
                    $('#outPut').val($('#outPut').val()+"\n"+"Se asignó el recurso al aula.");
                }else{
                    let existe=false;
                    for(let a of Aula[indiceBusqueda].recursos){
                        if(a==Rec){
                            existe=true;
                        }
                    }
                    if(existe){
                        $('#outPut').val($('#outPut').val()+"\n"+"Ya existe el recurso para el aula.");
                    }else{
                        Aula[indiceBusqueda].recursos.push(recurso.id);
                        $('#outPut').val($('#outPut').val()+"\n"+"Se asignó el recurso.");
                    }
                }                
            }else{
                $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra aula con id= "+aulGrup+".");
            }
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra recurso con id= "+Rec+" o recurso "+Rec+".");
        }
        
    }
}

function asignarGrupo ( idGrupo , idMateria ){
    grupo=buscarGrupoID(idGrupo);
    if(grupo){
        materia=buscarMatID(idMateria);
        if(materia){
            if(Grupo[indiceBusqueda].materia==""){
                Grupo[indiceBusqueda].materia=materia.id;
                $('#outPut').val($('#outPut').val()+"\n"+"Se asignó correctamente la materia al grupo.");
            }else{
                $('#outPut').val($('#outPut').val()+"\n"+"Ya existe la materia para grupo con id="+idGrupo+".");
            }
        }else{
            $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra materia con id= "+idMateria+".");
        }
    }else{
        $('#outPut').val($('#outPut').val()+"\n"+"No se encuentra grupo con id= "+idGrupo+".");
    }

}
function asignarEdificio ( IDEdificio , IDAula ){

}
function asignarAula ( IDAula , IDGrupo ){

}
function asignarMaestro ( IDMaestro , IDGrupo ){

}

function asignarAlumno ( IDAlumno , IDGrupo ){

}
function buscarRecNom(idRec) {
    indiceBusqueda=0;
    for(let a of Recurso){
        if(a.nombre==idRec){
            return a;
        }
        indiceBusqueda++;
    }
    return false;

}
function buscarRecId(idRec) {
    indiceBusqueda=0;
    for(let a of Recurso){
        if(a.id==idRec){
            return a;
        }
        indiceBusqueda++;
    }
    return false;
}

function buscarGrupoID(idGrupo) {
    indiceBusqueda=0;
    for(let a of Grupo){
        if(a.id==idGrupo){
            return a;
        }
        indiceBusqueda++;
    }
    return false;
}

function buscarHoraID(idHora) {
    indiceBusqueda=0;
    for(let a of Hora){
        if(a.id==idHora){
            return a;
        }
        indiceBusqueda++;
    }
    return false;
}

function buscarAulaID(idAula) {
    indiceBusqueda=0;
    for(let a of Aula){
        if(a.id==idAula){
            return a;
        }
        indiceBusqueda++;
    }
    return false;
}

function buscarMatID(idMat){
    indiceBusqueda=0;
    for(let a of Materia){
        if(a.id==idMat){
            return a;
        }
        indiceBusqueda++;
    }
    return false;
}

function busca_id(id){
    for(let a of Alumno){
        if(a.id==id){
            return a;
        }
    }
    return "No se encontro";
}
function busca_nombre(nombre){
    var result=[];
    for(let a of Alumno){
        if(a.nombre==nombre){
            result.push(a);
        }
    }
    if(result.length==0){
        return "No se encontro";
    }
    return result;
}

//console.log(busca_id(13400490));


/*
Recurso ( 1 , asd , Proyector );
Recurso ( 2 , qwe , Proyector );
Recurso ( 3 , gdf , Proyector );
Aula ( 1 , SV , 40 );
Grupo ( 1 , B , 30 , ISC );
Hora ( 1 , LMXJV , 12 );
Materia ( 1 , LYAII , ISC , 5 );
AsignarHora ( 1 , 1 );
AsignarGrupo ( 1 , 1 );
AsignarRecurso ( Proyector , 1 );
AsignarRecurso ( 1 , 1 );



 */






/*
Alumno ( IDAlumno , Nombre , Carrera );
Edificio ( IDEdificio , UVP );
Grupo ( IDGrupo , B , 30 , ISC );
Maestro ( IDMaestro , FIC , 09 , 12 , 14 , 18 );
Aula ( ID , B , 40 );
Recurso ( IDRecurso , SerieRecurso , Cañón );
Materia ( IDMateria , LYAII , ISC , 5 );
Hora ( IDHora , LMXJV , 12 );
AsignarRecurso ( IDRecurso , IDMateria );
AsignarGrupo ( IDGrupo , IDMateria );
AsignarEdificio ( IDEdificio , IDAula );
AsignarAula ( IDAula , IDGrupo );
AsignarMaestro ( IDMaestro , IDGrupo );
AsignarHora ( IDHora , IDGrupo );
AsignarAlumno ( IDAlumno , IDGrupo );
 */