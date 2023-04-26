function exibirModalContatos() {
    $("#modalTransparency").modal("show");
    
    var dadosModal = `
        <div>
            <a href="${base_url()}contratos/Aditivo - Urg e Emerg Ouro Fino MG.pdf" target="_blank">
                <div class="card-deck mb-2">
                    <div class="card">
                        <div class="card-body px-1 py-2 d-flex align-items-center">
                            Aditivo - Urg e Emerg Ouro Fino MG
                        </div>
                    </div>
                </div>
            </a>
            <a href="${base_url()}contratos/Congonhal.pdf" target="_blank">
                <div class="card-deck mb-2">
                    <div class="card">
                        <div class="card-body px-1 py-2 d-flex align-items-center">
                            Congonhal
                        </div>
                    </div>
                </div>
            </a>
            <a href="${base_url()}contratos/Ouro Fino MG (Anestesia).pdf" target="_blank">
                <div class="card-deck mb-2">
                    <div class="card">
                        <div class="card-body px-1 py-2 d-flex align-items-center">
                            Ouro Fino MG (Anestesia)
                        </div>
                    </div>
                </div>
            </a>
            <a href="${base_url()}contratos/Ouro Fino MG (G.O).pdf" target="_blank">
                <div class="card-deck mb-2">
                    <div class="card">
                        <div class="card-body px-1 py-2 d-flex align-items-center">
                            Ouro Fino MG (G.O)
                        </div>
                    </div>
                </div>
            </a>
            <a href="${base_url()}contratos/Ouro Fino MG (Pediatria).pdf" target="_blank">
                <div class="card-deck mb-2">
                    <div class="card">
                        <div class="card-body px-1 py-2 d-flex align-items-center">
                            Ouro Fino MG (Pediatria)
                        </div>
                    </div>
                </div>
            </a>
            <a href="${base_url()}contratos/Ouro Fino MG (Urgencia e Emerg).pdf" target="_blank">
                <div class="card-deck mb-2">
                    <div class="card">
                        <div class="card-body px-1 py-2 d-flex align-items-center">
                            Ouro Fino MG (Urgencia e Emerg)
                        </div>
                    </div>
                </div>
            </a>
            <a href="${base_url()}contratos/Senador Amaral MG.pdf" target="_blank">
                <div class="card-deck mb-2">
                    <div class="card">
                        <div class="card-body px-1 py-2 d-flex align-items-center">
                            Senador Amaral MG
                        </div>
                    </div>
                </div>
            </a>
            <a href="${base_url()}contratos/Varginha MG.pdf" target="_blank">
                <div class="card-deck mb-2">
                    <div class="card">
                        <div class="card-body px-1 py-2 d-flex align-items-center">
                            Varginha MG
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `
    $("#modalTransparency .modal-body").html(dadosModal);
}

function closeModal() {
    $("#modalTransparency").modal("hide");
}

function base_url() {
    var pathparts = location.pathname.split('/');
    if (location.host == 'localhost') {
        var url = location.origin+'/'+pathparts[1].trim('/')+'/';
    }else{
        var url = location.origin +'/';
    }
    return url;
}