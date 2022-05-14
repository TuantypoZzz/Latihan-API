
function cariFilm(){
    $('#list-filem').html('')
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data:{
            'apikey' : '36d3b20',
            's' : $('#search-isi').val()
        },
        success: function (hasil){
            if(hasil.Response == "True"){
                let filem = hasil.Search

                $.each(filem, function (i, data){
                    $('#list-filem').append(`
                    <div class="col-md-4">
                        <div class="card mb-3">
                        <img src="${data.Poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">"`+data.Title+`"</h5>
                            <h6 class="card-subtitle mb-2 text-muted">"`+data.Year+`"</h6>
                            <a href="#" class="card-link" data-toggle="modal" data-target="#movieDetail${i}">See Detail</a>
                        </div>
                        </div>
                    </div>

                    <!-- Modal -->
                    <div class="modal fade" id="movieDetail${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img src="${data.Poster}" class="card-img-top" alt="...">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    `)
                })

                $('#search-isi').val('')


            } else {
                $('#list-filem').html(`<h1 class="text-center">'`+ hasil.Error +`'</h1>
                
                `)
            }
        }
    })
}

$('#search-tombol').on('click', function(){
    cariFilm();
    
})

$('#search-isi').on('keyup',function (e){
    if(e.keyCode === 13){
        cariFilm();
    }
} )