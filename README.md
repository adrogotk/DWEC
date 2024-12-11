# VIDEOCLUB

## Form 1

![Videoclub1](https://github.com/user-attachments/assets/634532c0-84e6-4701-b9ac-5331c1d01975)

```
Imports System.ComponentModel

Public Class Frm1

    'Al pulsar el boton "iniciar" llama al procedimiento mostrarFrm2, para mostrar el formulario principal (el 2)
    Private Sub BtnIniciar_Click(sender As Object, e As EventArgs) Handles BtnIniciar.Click
        mostrarFrm2()
    End Sub

    'Al cargar el formulario llama al procedimiento ocultarFrm para que el resto de formularios se mantengan ocultos
    Private Sub Frm1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        ocultarFrm()
    End Sub

   'Al cerrar el formulario llama al procedimiento cerrarFrm para que se cierren todos los formularios
    Private Sub Frm1_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub

   'Al hacer tick el cronometro a los 20s, llama al procedimiento mostrarFrm2, para mostrar el formulario principal (el 2) aunque no hayamos pulsado "iniciar"
    Private Sub Timer1_Tick(sender As Object, e As EventArgs) Handles Timer1.Tick
        mostrarFrm2()
    End Sub

End Class
```

## Form 2
![Videoclub 2 1](https://github.com/user-attachments/assets/eac300a5-eb93-409c-978d-edb4e4318e46)
![Videoclub 2 2](https://github.com/user-attachments/assets/b94a9f68-aaac-42a8-a8e2-189fa5a99db0)
![Videoclub 2 3](https://github.com/user-attachments/assets/69337594-5353-45cc-8872-6a711459f958)
![Videoclub 2 4](https://github.com/user-attachments/assets/7a172621-ca38-4e96-9f70-0d9e729a24c5)
![Videoclub 2 5](https://github.com/user-attachments/assets/dd7c6ed6-0f02-4aaa-ae80-99546bc7f4b5)

```
Imports System.ComponentModel
Imports System.Reflection.Metadata

Public Class Frm2

    'Al pulsar en la opción de menú "Peliculas->Agregar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento habilitarFormulario para que podamos escribir sobre los campos de texto distintos al ID
    Private Sub AgregarPelicula_Click(sender As Object, e As EventArgs) Handles AgregarPelicula.Click
        setModo(Me, AgregarPelicula.Tag)
        habilitarFormulario(Me)
    End Sub

    'Al pulsar en la opción de menú "Peliculas->Modificar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento deshabilitarFormulario para que inicialmente no podamos escribir sobre los campos de texto distintos al ID
    Private Sub ModificarPelicula_Click(sender As Object, e As EventArgs) Handles ModificarPelicula.Click
        setModo(Me, ModificarPelicula.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Al pulsar en la opción de menú "Peliculas->Eliminar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento deshabilitarFormulario para que inicialmente no podamos escribir sobre los campos de texto distintos al ID
    Private Sub EliminarPelicula_Click(sender As Object, e As EventArgs) Handles EliminarPelicula.Click
        setModo(Me, EliminarPelicula.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Al pulsar en la opción de menú "Peliculas->Consultar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento deshabilitarFormulario para que inicialmente no podamos escribir sobre los campos de texto distintos al ID
    Private Sub ConsultarPelicula_Click(sender As Object, e As EventArgs) Handles ConsultarPelicula.Click
        setModo(Me, ConsultarPelicula.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Al pulsar sobre alguna de las opciones del elemento de menu "Listado", llama al procedimiento mostrarFrm3, para mostrar el formulario de listados (el 3)
    'con las características correspondientes segun la opcion clickada
    Private Sub PeliculasTodos_Click(sender As Object, e As EventArgs) Handles PeliculasTodos.Click, PeliculasCategorias.DropDownItemClicked,
                                                                       SociosTodos.Click, SociosCategorias.DropDownItemClicked,
                                                                       PrestamoTodos.Click, PrestamoCategorias.DropDownItemClicked
        mostrarFrm3(sender)
    End Sub

    'Al pulsar en el boton salir, llama al procedimiento cerrarFrm, para cerrar todos los formularios
    Private Sub Salir_Click(sender As Object, e As EventArgs) Handles Salir.Click
        cerrarFrm()
    End Sub

    'Al pulsar en la opción de menú "Acerca De", llama al procedimiento mostrarFrm4, para abrir el formulario de Acerca De (el 4)
    Private Sub AcercaDe_Click(sender As Object, e As EventArgs) Handles AcercaDe.Click
        mostrarFrm4()
    End Sub

    'Al pulsar en el boton "Aceptar", llama al procedimiento comprobarCampos, para comprobar que no hay campos vacios
    'y luego, si supera la verificación llama al procedimiento accionAceptar, para según el modo en el que estemos hacer una acción u otra.
    'Por ultimo llama al procedimiento borrarForm, para limpiar el formulario y al procedimiento deshabilitarFormulario,
    'para que en caso de que no estemos en el modo "Agregar" vuelvan a estar los campos distintos al ID deshabilitados
    Private Sub BtnAceptar_Click(sender As Object, e As EventArgs) Handles BtnAceptar.Click
        Dim campos_correctos = comprobarCampos(Me)
        If (campos_correctos = True) Then
            accionAceptar(Me)
        End If
        borrarForm(Me)
        If (getModo() <> "Agregar Pelicula") Then
            deshabilitarFormulario(Me)
        End If
    End Sub

    'Al pulsar en el boton "Cancelar", llama al procedimiento borrarForm, para limpiar el formulario
    Private Sub BtnCancelar_Click(sender As Object, e As EventArgs) Handles BtnCancelar.Click
        borrarForm(Me)
    End Sub

    'Al pulsar sobre la lupa, llama al procedimiento consultarPelicula, para obtener el resto de datos de la pelicula asociada al ID Introducido.
    'En caso de que estemos en el modo modificar, habilitamos los campos de texto llamando al procedimiento habilitarFormulario, para poder realizar cambios
    Private Sub btn_lupa_Click(sender As Object, e As EventArgs) Handles btn_lupa.Click
        ModuleFicheros.consultarPelicula(Me.IdPelicula.Text.ToString())
        If (getModo() = "Modificar Pelicula") Then
            habilitarFormulario(Me)
        End If
    End Sub

    'Al cambiar el texto del Id, llama al procedimiento habilitarLupa para habilitar la lupa
    Private Sub IdPelicula_TextChanged(sender As Object, e As EventArgs) Handles IdPelicula.TextChanged
        habilitarLupa(Me)
    End Sub

    'Al pulsar sobre una de las opciones del elemento de menu "Socios" llama al procedimiento mostrarFrm5 para mostrar el formulario de socios (el 5)
    'con las características correspondientes segun la opcion clickada
    Private Sub AgregarSocio_Click(sender As Object, e As EventArgs) Handles AgregarSocio.Click, ModificarSocio.Click,
                                                                       EliminarSocio.Click, ConsultarSocio.Click
        mostrarFrm5(sender)
    End Sub

    'Al pulsar sobre una de las opciones del elemento de menu "Prestamos" llama al procedimiento mostrarFrm5 para mostrar el formulario de prestamos (el 6)
    'con las características correspondientes segun la opcion clickada
    Private Sub AgregarPrestamo_Click(sender As Object, e As EventArgs) Handles AgregarPrestamo.Click, ModificarPrestamo.Click,
                                                                   EliminarPrestamo.Click, ConsultarPrestamo.Click
        mostrarFrm6(sender)
    End Sub

    'Al cerrar el formulario llama al procedimiento cerrarFrm para que se cierren todos los formularios
    Private Sub Frm2_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub

End Class
```
## Form 3
![Videoclub 3 0](https://github.com/user-attachments/assets/0a6a539f-9b74-41b0-af15-a750f5a51acb)
![Videoclub 3 1](https://github.com/user-attachments/assets/c3e6e324-5c5f-4da4-8db4-000f818ee3c9)
![Videoclub 3 2](https://github.com/user-attachments/assets/fe46daac-a6e0-4a24-8f0e-6f59603f9e14)
![Videoclub 3 3](https://github.com/user-attachments/assets/c347b30f-8c9f-4864-a9da-3be22c2673a6)
![Videoclub 3 4](https://github.com/user-attachments/assets/f1c695d3-4ddd-41fc-9acd-fe3d384c99b3)
El listado de peliculas mediante filtro tanto de calificacion, titulo, actor o director; de socios mediante filtro de nombre y de prestamos mediante filtro tanto de socio, como de pelicula, funcionan igual
que el listado de peliculas mediante filtro de género mostrado en la 5º imagen

```
Imports System.ComponentModel

Public Class Frm3

    'Al cerrar el formulario llama al procedimiento cerrarFrm para que se cierren todos los formularios
    Private Sub Frm3_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub

    'Al pulsar en el boton "Volver a Inicio", llama al procedimiento mostrarFrm2 para que se muestre el formulario principal (el 2)
    Private Sub btn_volver_Click(sender As Object, e As EventArgs) Handles btn_volver.Click
        mostrarFrm2()
    End Sub

    'Al introducir caracteres sobre el texto de filtro, se llama al procedimiento filtrar, para que se realice un filtro de los resultados
    'mostrados en el listView siguiendo el criterio que hemos introducido
    Private Sub filtro_TextChanged(sender As Object, e As EventArgs) Handles filtro.TextChanged
        filtrar()
    End Sub
End Class
```
## Form 4
![Videoclub 4](https://github.com/user-attachments/assets/e934063a-6e20-427d-9068-a1ae7ae6ec41)

```
Imports System.ComponentModel

Public Class Frm4

    'Al cerrar el formulario llama al procedimiento cerrarFrm para que se cierren todos los formularios
    Private Sub Frm4_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub

    'Al pulsar en el boton "Volver a Inicio", llama al procedimiento mostrarFrm2 para que se muestre el formulario principal (el 2)
    Private Sub btn_volver_Click(sender As Object, e As EventArgs) Handles btn_volver.Click
        mostrarFrm2()
    End Sub
End Class
```
## Form 5
![Videoclub 5](https://github.com/user-attachments/assets/b0516736-dd3c-47ca-9744-50f9e0348ee3)
El formulario en los modos de modificar, eliminar y consultar socio, se visualizaría de la misma forma que para las películas
```
Imports System.ComponentModel

Public Class Frm5

    'Al pulsar en la opción de menú "Socios->Agregar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento habilitarFormulario para que podamos escribir sobre los campos de texto distintos al ID
    Private Sub AgregarSocio_Click(sender As Object, e As EventArgs) Handles AgregarSocio.Click
        setModo(Me, AgregarSocio.Tag)
        habilitarFormulario(Me)
    End Sub

    'Al pulsar en la opción de menú "Socios->Modificar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento deshabilitarFormulario para que inicialmente no podamos escribir sobre los campos de texto distintos al ID
    Private Sub ModificarSocio_Click(sender As Object, e As EventArgs) Handles ModificarSocio.Click
        setModo(Me, ModificarSocio.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Al pulsar en la opción de menú "Socios->Eliminar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento deshabilitarFormulario para que inicialmente no podamos escribir sobre los campos de texto distintos al ID
    Private Sub EliminarSocio_Click(sender As Object, e As EventArgs) Handles EliminarSocio.Click
        setModo(Me, EliminarSocio.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Al pulsar en la opción de menú "Socios->Consultar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento deshabilitarFormulario para que inicialmente no podamos escribir sobre los campos de texto distintos al ID
    Private Sub ConsultarSocio_Click(sender As Object, e As EventArgs) Handles ConsultarSocio.Click
        setModo(Me, ConsultarSocio.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Al pulsar sobre alguna de las opciones del elemento de menu "Listado", llama al procedimiento mostrarFrm3, para mostrar el formulario de listados (el 3)
    'con las características correspondientes segun la opcion clickada
    Private Sub PeliculasTodos_Click(sender As Object, e As EventArgs) Handles PeliculasTodos.Click, PeliculasCategorias.DropDownItemClicked,
                                                                       SociosTodos.Click, SociosCategorias.DropDownItemClicked,
                                                                       PrestamoTodos.Click, PrestamoCategorias.DropDownItemClicked
        mostrarFrm3(sender)
    End Sub

    'Al pulsar en el boton salir, llama al procedimiento cerrarFrm, para cerrar todos los formularios
    Private Sub Salir_Click(sender As Object, e As EventArgs) Handles Salir.Click
        cerrarFrm()
    End Sub

    'Al pulsar en la opción de menú "Acerca De", llama al procedimiento mostrarFrm4, para abrir el formulario de Acerca De (el 4)
    Private Sub AcercaDe_Click(sender As Object, e As EventArgs) Handles AcercaDe.Click
        mostrarFrm4()
    End Sub

    'Al pulsar en el boton "Aceptar", llama al procedimiento comprobarCampos, para comprobar que no hay campos vacios
    'y luego, si supera la verificación llama al procedimiento accionAceptar, para según el modo en el que estemos hacer una acción u otra.
    'Por ultimo llama al procedimiento borrarForm, para limpiar el formulario y al procedimiento deshabilitarFormulario,
    'para que en caso de que no estemos en el modo "Agregar" vuelvan a estar los campos distintos al ID deshabilitados
    Private Sub BtnAceptar_Click(sender As Object, e As EventArgs) Handles BtnAceptar.Click
        Dim campos_correctos = comprobarCampos(Me)
        If (campos_correctos = True) Then
            accionAceptar(Me)
        End If
        borrarForm(Me)
        If (getModo() <> "Agregar Socio") Then
            deshabilitarFormulario(Me)
        End If
    End Sub

   'Al pulsar en el boton "Cancelar", llama al procedimiento borrarForm, para limpiar el formulario
    Private Sub BtnCancelar_Click(sender As Object, e As EventArgs) Handles BtnCancelar.Click
        borrarForm(Me)
    End Sub

    'Al pulsar sobre la lupa, llama al procedimiento consultarSocio, para obtener el resto de datos del socio asociado al ID Introducido.
    'En caso de que estemos en el modo modificar, habilitamos los campos de texto llamando al procedimiento habilitarFormulario, para poder realizar cambios
    Private Sub btn_lupa_Click(sender As Object, e As EventArgs) Handles btn_lupa.Click
        ModuleFicheros.consultarSocio(Me.IdSocio.Text.ToString())
        If (getModo() = "Modificar Socio") Then
            habilitarFormulario(Me)
        End If
    End Sub

    'Al cambiar el texto del Id, llama al procedimiento habilitarLupa para habilitar la lupa
    Private Sub IdSocio_TextChanged(sender As Object, e As EventArgs) Handles IdSocio.TextChanged
        habilitarLupa(Me)
    End Sub

    'Al pulsar sobre una de las opciones del elemento de menu "Peliculas" llama al procedimiento mostrarFrm2 para mostrar el formulario de peliculas (el 2)
    'con las características correspondientes segun la opcion clickada
    Private Sub AgregarPelicula_Click(sender As Object, e As EventArgs) Handles AgregarPelicula.Click, ModificarPelicula.Click,
                                                                       EliminarPelicula.Click, ConsultarPelicula.Click
        mostrarFrm2(sender)
    End Sub

    'Al pulsar sobre una de las opciones del elemento de menu "Prestamos" llama al procedimiento mostrarFrm5 para mostrar el formulario de prestamos (el 6)
    'con las características correspondientes segun la opcion clickada
    Private Sub AgregarPrestamo_Click(sender As Object, e As EventArgs) Handles AgregarPrestamo.Click, ModificarPrestamo.Click,
                                                               EliminarPrestamo.Click, ConsultarPrestamo.Click
        mostrarFrm6(sender)
    End Sub

    'Al cerrar el formulario llama al procedimiento cerrarFrm para que se cierren todos los formularios
    Private Sub Frm5_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub

End Class
```
## Form 6
![Videoclub 6](https://github.com/user-attachments/assets/ee8c992f-d106-42f4-a9a3-142d86f75bed)

```
Imports System.ComponentModel

Public Class Frm6

    'Al pulsar en la opción de menú "Prestamos->Alquilar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento habilitarFormulario para que podamos escribir sobre los campos de texto distintos al ID
    Private Sub AgregarPrestamo_Click(sender As Object, e As EventArgs) Handles AgregarPrestamo.Click
        setModo(Me, AgregarPrestamo.Tag)
        habilitarFormulario(Me)
    End Sub

    'Al pulsar en la opción de menú "Prestamos->Modificar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento deshabilitarFormulario para que inicialmente no podamos escribir sobre los campos de texto distintos al ID
    Private Sub ModificarPrestamo_Click(sender As Object, e As EventArgs) Handles ModificarPrestamo.Click
        setModo(Me, ModificarPrestamo.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Al pulsar en la opción de menú "Prestamos->Devolver", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento deshabilitarFormulario para que inicialmente no podamos escribir sobre los campos de texto distintos al ID
    Private Sub EliminarPrestamo_Click(sender As Object, e As EventArgs) Handles EliminarPrestamo.Click
        setModo(Me, EliminarPrestamo.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Al pulsar en la opción de menú "Prestamos->Consultar", llama al procedimiento setModo para definir en que parte estamos del programa,
    'y al procedimiento deshabilitarFormulario para que inicialmente no podamos escribir sobre los campos de texto distintos al ID
    Private Sub ConsultarPrestamo_Click(sender As Object, e As EventArgs) Handles ConsultarPrestamo.Click
        setModo(Me, ConsultarPrestamo.Tag)
        deshabilitarFormulario(Me)
    End Sub

    'Al pulsar sobre alguna de las opciones del elemento de menu "Listado", llama al procedimiento mostrarFrm3, para mostrar el formulario de listados (el 3)
    'con las características correspondientes segun la opcion clickada
    Private Sub PeliculasTodos_Click(sender As Object, e As EventArgs) Handles PeliculasTodos.Click, PeliculasCategorias.DropDownItemClicked,
                                                                       SociosTodos.Click, SociosCategorias.DropDownItemClicked,
                                                                       PrestamoTodos.Click, PrestamoCategorias.DropDownItemClicked
        mostrarFrm3(sender)
    End Sub

    'Al pulsar en el boton salir, llama al procedimiento cerrarFrm, para cerrar todos los formularios
    Private Sub Salir_Click(sender As Object, e As EventArgs) Handles Salir.Click
        cerrarFrm()
    End Sub

    'Al pulsar en la opción de menú "Acerca De", llama al procedimiento mostrarFrm4, para abrir el formulario de Acerca De (el 4)
    Private Sub AcercaDe_Click(sender As Object, e As EventArgs) Handles AcercaDe.Click
        mostrarFrm4()
    End Sub

    'Al pulsar en el boton "Aceptar", llama al procedimiento comprobarCampos, para comprobar que no hay campos vacios
    'y luego, si supera la verificación llama al procedimiento accionAceptar, para según el modo en el que estemos hacer una acción u otra.
    'Por ultimo llama al procedimiento borrarForm, para limpiar el formulario y al procedimiento deshabilitarFormulario,
    'para que en caso de que no estemos en el modo "Alquilar" vuelvan a estar los campos distintos al ID deshabilitados
    Private Sub BtnAceptar_Click(sender As Object, e As EventArgs) Handles BtnAceptar.Click
        Dim campos_correctos = comprobarCampos(Me)
        If (campos_correctos = True) Then
            accionAceptar(Me)
        End If
        borrarForm(Me)
        If (getModo() <> "Alquilar Prestamo") Then
            deshabilitarFormulario(Me)
        End If
    End Sub


   'Al pulsar en el boton "Cancelar", llama al procedimiento borrarForm, para limpiar el formulario
    Private Sub BtnCancelar_Click(sender As Object, e As EventArgs) Handles BtnCancelar.Click
        borrarForm(Me)
    End Sub

    'Al pulsar sobre la lupa, llama al procedimiento consultarPrestamo, para obtener el resto de datos del prestamo asociado al ID Introducido.
    'En caso de que estemos en el modo modificar, habilitamos los campos de texto llamando al procedimiento habilitarFormulario, para poder realizar cambios
    Private Sub btn_lupa_Click(sender As Object, e As EventArgs) Handles btn_lupa.Click
        ModuleFicheros.consultarPrestamo(Me.IdPrestamo.Text.ToString())
        If (getModo() = "Modificar Prestamo") Then
            habilitarFormulario(Me)
        End If
    End Sub

    'Al cambiar el texto del Id, llama al procedimiento habilitarLupa para habilitar la lupa
    Private Sub IdPelicula_TextChanged(sender As Object, e As EventArgs) Handles IdPrestamo.TextChanged
        habilitarLupa(Me)
    End Sub

    'Al pulsar sobre una de las opciones del elemento de menu "Socios" llama al procedimiento mostrarFrm5 para mostrar el formulario de socios (el 5)
    'con las características correspondientes segun la opcion clickada
    Private Sub AgregarSocio_Click(sender As Object, e As EventArgs) Handles AgregarSocio.Click, ModificarSocio.Click,
                                                                   EliminarSocio.Click, ConsultarSocio.Click
        mostrarFrm5(sender)
    End Sub

    'Al pulsar sobre una de las opciones del elemento de menu "Peliculas" llama al procedimiento mostrarFrm2 para mostrar el formulario de peliculas (el 2)
    'con las características correspondientes segun la opcion clickada
    Private Sub AgregarPelicula_Click(sender As Object, e As EventArgs) Handles AgregarPelicula.Click, ModificarPelicula.Click,
                                                                    EliminarPelicula.Click, ConsultarPelicula.Click
        mostrarFrm2(sender)
    End Sub

    'Al cerrar el formulario llama al procedimiento cerrarFrm para que se cierren todos los formularios
    Private Sub Frm6_Closing(sender As Object, e As CancelEventArgs) Handles Me.Closing
        cerrarFrm()
    End Sub


End Class
```
## Module Procedimientos

```
Imports System.Runtime.CompilerServices

Module ModuleProcedimientos
    Const APP_NAME = "Videoclub"
    Dim modo As String
    Public Sub mostrarFrm2()
        Frm1.Timer1.Enabled = False
        Frm1.Hide()
        Frm3.Hide()
        Frm4.Hide()
        Frm2.Show()
    End Sub
    Public Sub mostrarFrm3(sender As Object)
        Frm2.Hide()
        Frm5.Hide()
        Frm6.Hide()
        Dim listadoClickado As ToolStripMenuItem = sender
        If (listadoClickado.DropDownItems.Count > 0) Then
            Dim filtros As ToolStripItemCollection = listadoClickado.DropDownItems
            For Each filtro In filtros
                If (filtro.Selected = True) Then
                    setModo(Frm3, filtro.Tag)
                    Frm3.filtro.Enabled = True
                End If
            Next
        Else
            setModo(Frm3, listadoClickado.Tag)
        End If
        Frm3.Show()
        presentarListado()
    End Sub
    Public Sub mostrarFrm4()
        Frm2.Hide()
        Frm4.Show()
        setModo(Frm4, "Acerca de")
    End Sub
    Public Sub mostrarFrm2(sender As Object)
        ocultarFrm()
        presentarFormulario(Frm2, sender)
        Frm2.Show()
    End Sub
    Public Sub mostrarFrm5(sender As Object)
        ocultarFrm()
        Frm5.Show()
        presentarFormulario(Frm5, sender)
    End Sub
    Public Sub mostrarFrm6(sender As Object)
        ocultarFrm()
        Frm6.Show()
        presentarFormulario(Frm6, sender)
    End Sub
    Public Sub ocultarFrm()
        Frm2.Hide()
        Frm3.Hide()
        Frm4.Hide()
        Frm5.Hide()
        Frm6.Hide()
    End Sub
    Public Sub cerrarFrm()
        Application.Exit()
    End Sub
    Public Sub habilitarFormulario(form As Form)
        Select Case form.Name
            Case "Frm2"
                Frm2.IdPelicula.Enabled = False
                Frm2.Calificacion.Enabled = True
                Frm2.genero.Enabled = True
                Frm2.titulo.Enabled = True
                Frm2.director.Enabled = True
                Frm2.actores.Enabled = True
                Frm2.descripcion.Enabled = True
                Frm2.BtnAceptar.Enabled = True
                Frm2.BtnCancelar.Enabled = True
                deshabilitarLupa(Frm2)
            Case "Frm5"
                Frm5.IdSocio.Enabled = False
                Frm5.Nivel.Enabled = True
                Frm5.poblacion.Enabled = True
                Frm5.email.Enabled = True
                Frm5.nombre.Enabled = True
                Frm5.apellidos.Enabled = True
                Frm5.direccion.Enabled = True
                Frm5.telefono.Enabled = True
                Frm5.BtnAceptar.Enabled = True
                Frm5.BtnCancelar.Enabled = True
                deshabilitarLupa(Frm5)
            Case "Frm6"
                Frm6.IdPrestamo.Enabled = False
                Frm6.Socio.Enabled = True
                Frm6.Pelicula.Enabled = True
                Frm6.Fecha_inicio.Enabled = True
                Frm6.Fecha_vencimiento.Enabled = True
                Frm6.BtnAceptar.Enabled = True
                Frm6.BtnCancelar.Enabled = True
        End Select
        MsgBox("Formulario habilitado")
    End Sub
    Public Sub deshabilitarFormulario(form As Form)
        Select Case form.Name
            Case "Frm2"
                Frm2.IdPelicula.Enabled = True
                Frm2.Calificacion.Enabled = False
                Frm2.genero.Enabled = False
                Frm2.titulo.Enabled = False
                Frm2.director.Enabled = False
                Frm2.actores.Enabled = False
                Frm2.descripcion.Enabled = False
                If (modo.IndexOf("Consultar") = -1) Then
                    Frm2.BtnAceptar.Enabled = True
                    Frm2.BtnCancelar.Enabled = True
                Else
                    Frm2.BtnAceptar.Enabled = False
                    Frm2.BtnCancelar.Enabled = False
                End If
            Case "Frm5"
                Frm5.IdSocio.Enabled = True
                Frm5.Nivel.Enabled = False
                Frm5.poblacion.Enabled = False
                Frm5.email.Enabled = False
                Frm5.nombre.Enabled = False
                Frm5.apellidos.Enabled = False
                Frm5.direccion.Enabled = False
                Frm5.telefono.Enabled = False
                If (modo.IndexOf("Consultar") = -1) Then
                    Frm5.BtnAceptar.Enabled = True
                    Frm5.BtnCancelar.Enabled = True
                Else
                    Frm5.BtnAceptar.Enabled = False
                    Frm5.BtnCancelar.Enabled = False
                End If
            Case "Frm6"
                Frm6.IdPrestamo.Enabled = True
                Frm6.Socio.Enabled = False
                Frm6.Pelicula.Enabled = False
                Frm6.Fecha_inicio.Enabled = False
                Frm6.Fecha_vencimiento.Enabled = False
                If (modo.IndexOf("Consultar") = -1) Then
                    Frm6.BtnAceptar.Enabled = True
                    Frm6.BtnCancelar.Enabled = True
                Else
                    Frm6.BtnAceptar.Enabled = False
                    Frm6.BtnCancelar.Enabled = False
                End If
        End Select
        MsgBox("Formulario Deshabilitado")
    End Sub
    Public Sub habilitarLupa(form As Form)
        Select Case form.Name
            Case "Frm2"
                Frm2.btn_lupa.Enabled = True
            Case "Frm5"
                Frm5.btn_lupa.Enabled = True
            Case "Frm6"
                Frm6.btn_lupa.Enabled = True
        End Select
    End Sub
    Private Sub deshabilitarLupa(form As Form)
        Select Case form.Name
            Case "Frm2"
                Frm2.btn_lupa.Enabled = False
            Case "Frm5"
                Frm5.btn_lupa.Enabled = False
            Case "Frm6"
                Frm6.btn_lupa.Enabled = False
        End Select
    End Sub
    Public Sub setModo(form As Form, modo_string As String)
        modo = modo_string
        form.Text = APP_NAME + " -> " + modo
    End Sub

    Public Sub borrarForm(form As Form)
        Select Case form.Name
            Case "Frm2"
                Frm2.IdPelicula.Text = ""
                Frm2.Calificacion.Text = ""
                Frm2.genero.Text = ""
                Frm2.titulo.Text = ""
                Frm2.director.Text = ""
                Frm2.actores.Text = ""
                Frm2.descripcion.Text = ""
            Case "Frm5"
                Frm5.IdSocio.Text = ""
                Frm5.Nivel.Text = ""
                Frm5.poblacion.Text = ""
                Frm5.email.Text = ""
                Frm5.nombre.Text = ""
                Frm5.apellidos.Text = ""
                Frm5.direccion.Text = ""
                Frm5.telefono.Text = ""
            Case "Frm6"
                Frm6.IdPrestamo.Text = ""
                Frm6.Socio.Text = ""
                Frm6.Pelicula.Text = ""
                Frm6.Fecha_inicio.Text = ""
                Frm6.Fecha_vencimiento.Text = ""
        End Select
    End Sub

    Public Sub accionAceptar(form As Form)
        Select Case modo
            Case "Agregar Pelicula"
                guardarPelicula()
            Case "Modificar Pelicula"
                modificarPelicula()
            Case "Eliminar Pelicula", "Eliminar Socio", "Devolver Prestamo"
                confirmarBorrado(form)
            Case "Consultar Pelicula"
                consultarPelicula(Frm2.IdPelicula.Text)
            Case "Agregar Socio"
                guardarSocio()
            Case "Modificar Socio"
                modificarSocio()
            Case "Consultar Socio"
                consultarSocio(Frm5.IdSocio.Text)
            Case "Alquilar Prestamo"
                guardarPrestamo()
            Case "Modificar Prestamo"
                modificarPrestamo()
            Case "Consultar Prestamo"
                consultarPrestamo(Frm6.IdPrestamo.Text)
        End Select
    End Sub

    Public Sub presentarListado()
        If (modo.IndexOf("Pelicula") <> -1) Then
            Frm3.listado.Columns(0).Text = "ID"
            Frm3.listado.Columns(1).Text = "Calificacion"
            Frm3.listado.Columns(2).Text = "Genero"
            Frm3.listado.Columns(3).Text = "Titulo"
            Frm3.listado.Columns(4).Text = "Director"
            Frm3.listado.Columns(5).Text = "Actores"
            Frm3.listado.Columns(6).Text = "Descripcion"
        End If
        If (modo.IndexOf("Socio") <> -1) Then
            Frm3.listado.Columns(0).Text = "ID"
            Frm3.listado.Columns(1).Text = "Nivel"
            Frm3.listado.Columns(2).Text = "Poblacion"
            Frm3.listado.Columns(3).Text = "Email"
            Frm3.listado.Columns(4).Text = "Nombre"
            Frm3.listado.Columns(5).Text = "Apellidos"
            Frm3.listado.Columns(6).Text = "Direccion"
            Frm3.listado.Columns(7).Text = "Telefono"
        End If
        If (modo.IndexOf("Prestamo") <> -1) Then
            Frm3.listado.Columns(0).Text = "ID"
            Frm3.listado.Columns(1).Text = "Socio"
            Frm3.listado.Columns(2).Text = "Pelicula"
            Frm3.listado.Columns(3).Text = "Fecha inicio"
            Frm3.listado.Columns(4).Text = "Fecha vencimiento"
        End If
    End Sub

    Private Sub presentarFormulario(form As Form, sender As Object)
        Dim opcionClickada As ToolStripMenuItem = sender
        setModo(form, opcionClickada.Tag)
        Select Case opcionClickada.Text
            Case "Agregar", "Alquilar"
                habilitarFormulario(form)
            Case Else
                deshabilitarFormulario(form)
        End Select
    End Sub
    Private Sub confirmarBorrado(form As Form)
        Dim mensaje = MsgBox("esta seguro de eliminar los datos? ", MsgBoxStyle.YesNo)
        If (mensaje = MsgBoxResult.Yes) Then
            Select Case form.Name
                Case "Frm2"
                    eliminarPelicula()
                Case "Frm5"
                    eliminarSocio()
                Case "Frm6"
                    eliminarPrestamo()
            End Select
        End If
    End Sub
    Public Function getModo() As String
        Return modo
    End Function
    Public Function comprobarCampos(form As Form) As Boolean
        Dim campos_correctos = True
        Select Case form.Name
            Case "Frm2"
                If (Frm2.Calificacion.Text = "" Or Frm2.genero.Text = "" Or
                        Frm2.titulo.Text = "" Or Frm2.director.Text = "" Or Frm2.actores.Text = "" Or
                        Frm2.descripcion.Text = "") Then
                    MsgBox("Rellena todos los campos")
                    campos_correctos = False
                End If
            Case "Frm5"
                If (Frm5.Nivel.Text = "" Or Frm5.poblacion.Text = "" Or
                        Frm5.email.Text = "" Or Frm5.nombre.Text = "" Or Frm5.apellidos.Text = "" Or
                        Frm5.direccion.Text = "" Or Frm5.telefono.Text = "") Then
                    MsgBox("Rellena todos los campos")
                    campos_correctos = False
                End If
                If (Frm5.email.Text.IndexOf("@") = -1) Then
                    MsgBox("Email no valido")
                    campos_correctos = False
                End If
                Try
                    Dim telefono = CInt(Frm5.telefono.Text)
                Catch x As InvalidCastException
                    campos_correctos = False
                    MsgBox("Telefono incorrecto")
                End Try
            Case "Frm6"
                If (Frm6.Socio.Text = "" Or Frm6.Pelicula.Text = "") Then
                    MsgBox("Rellena todos los campos")
                    campos_correctos = False
                End If
        End Select
        Return campos_correctos
    End Function

End Module

```
## Module Ficheros

```
Module ModuleFicheros
    Public Sub guardarPelicula()
        añadirGenero(Frm2.genero.Text)
        MsgBox("Se ha guardado la pelicula")
    End Sub
    Public Sub guardarSocio()
        añadirPoblacion(Frm5.poblacion.Text)
        MsgBox("Se ha guardado el socio")
    End Sub
    Public Sub guardarPrestamo()
        MsgBox("Se ha guardado el prestamo")
    End Sub
    Public Sub modificarPelicula()
        MsgBox("Se ha modificado la pelicula")
    End Sub
    Public Sub modificarSocio()
        MsgBox("Se ha modificado el socio")
    End Sub
    Public Sub modificarPrestamo()
        MsgBox("Se ha modificado el prestamo")
    End Sub
    Public Sub eliminarPelicula()
        MsgBox("Se ha eliminado la pelicula")
    End Sub
    Public Sub eliminarSocio()
        MsgBox("Se ha eliminado el socio")
    End Sub
    Public Sub eliminarPrestamo()
        MsgBox("Se ha eliminado el prestamo")
    End Sub
    Public Sub consultarPelicula(id As String)
        Dim idCorrecto As Boolean = True
        Try
            Dim identificador As Integer = CInt(Frm2.IdPelicula.Text)
        Catch x As InvalidCastException
            idCorrecto = False
            MsgBox("Id incorrecto")
        End Try
        If (idCorrecto = True) Then
            MsgBox("Datos pelicula")
        End If
    End Sub
    Public Sub consultarSocio(id As String)
        Dim idCorrecto As Boolean = True
        Try
            Dim identificador As Integer = CInt(Frm5.IdSocio.Text)
        Catch x As InvalidCastException
            idCorrecto = False
            MsgBox("Id incorrecto")
        End Try
        If (idCorrecto = True) Then
            MsgBox("Datos socio")
        End If
    End Sub
    Public Sub consultarPrestamo(id As String)
        Dim idCorrecto As Boolean = True
        Try
            Dim identificador As Integer = CInt(Frm6.IdPrestamo.Text)
        Catch x As InvalidCastException
            idCorrecto = False
            MsgBox("Id incorrecto")
        End Try
        If (idCorrecto = True) Then
            MsgBox("Datos prestamo")
        End If
    End Sub
    Public Sub listarPeliculas()
        MsgBox("listado peliculas")
    End Sub
    Public Sub listarSocios()
        MsgBox("listado socios")
    End Sub
    Public Sub listarPrestamos()
        MsgBox("listado prestamos")
    End Sub
    Public Sub filtrar()
        Dim modo = getModo()
        Select Case modo
            Case "Filtrar Pelicula Por Genero"
                MsgBox("Filtrando por genero pelicula")
            Case "Filtrar Pelicula Por Calificacion"
                MsgBox("Filtrando por calificacion pelicula")
            Case "Filtrar Pelicula Por Titulo"
                MsgBox("Filtrando por titulo pelicula")
            Case "Filtrar Pelicula Por Actor"
                MsgBox("Filtrando por actor pelicula")
            Case "Filtrar Pelicula Por Director"
                MsgBox("Filtrando por director pelicula")
            Case "Filtrar Socio Por Nombre"
                MsgBox("Filtrando por nombre socio")
            Case "Filtrar Prestamo Por Socio"
                MsgBox("Filtrando por socio prestamo")
            Case "Filtrar Prestamo Por Pelicula"
                MsgBox("Filtrando por pelicula prestamo")
        End Select
    End Sub
    Private Sub añadirGenero(genero As String)
        MsgBox("Genero añadido")
    End Sub
    Private Sub añadirPoblacion(poblacion As String)
        MsgBox("Poblacion Añadida")
    End Sub
End Module

```

