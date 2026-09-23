import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { PoMenuItem, PoMenuModule, PoPageModule, PoToolbarModule } from '@po-ui/ng-components';

import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, PoToolbarModule, PoMenuModule, PoPageModule, ProtheusLibCoreModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  
  constructor(private proAppConfigService: ProAppConfigService, private router: Router) {
    if (! this.proAppConfigService.insideProtheus()) {
      sessionStorage.setItem("insideProtheus", "0");
      sessionStorage.setItem("ERPTOKEN", '{"access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3OTAxMjY5ODgsInVzZXJpZCI6IjAwMDAwMCIsImV4cCI6MTc5MDEzMDU4OCwiZW52SWQiOiJQMTJfMjQxMCJ9.PXeY8lzs6F2Rd1eGHlm1Z6ZOWRZix-Rru19cBnJoLWh3Sd3n4hPjWRtND7DR7cuom-odFmVtFgm9lGccZ9gXdmihOdmne3PVZ2ZCwTnHNr6bpR7NjCefDEO3u9OzxCtW1ebv-I7N2UAbE_0p2EgEUbwYBAy-TZpCKUA6ebJhn50Q1M_ey4oix4tubkuYzJOnnAF75IKnoZ2hPnZqSc5HwjvofxYEPHrBPkyr76uo8XU9EmJNfwXzHSMYf0K82QDT2MpIwGY01w8Mt4gafkMzQtlFEy2lqEkrbZXCjZybdLmNSNLLo7ZawjdMotS8UvQslF2nmosffhhTHzqBHsrMxg","refresh_token": "CwEqIgI4W-VhBQxQFuhWKA5U.FwIbYy4rJ-1PTBMdAP45YzF9Cp-84Yy_WCtm80SKHhRrJlcu7dFxoN8er0_rGn0nPiWoUXGxDBmu8InBC1B5qQps8cR36P81Dy2KwWO3A4R3_gIBQ9ldsHzy1eSJpEt7s1eKT5N8BjbhZfSyVL33ahoCxULluKoM3m3FFfgmRu4Nq99w2zX1MsfDHR214D1F_USLY0HAjhEM4Xp2uP1b97nU.RnySRsAeg-hshRvaFq-l039FqGlLSQkgGd2ANoEgz-VMmpCuDy_8SndoD8Bsi3XeXUKuheAqHvOC-eZuWOz7hvSFwDNk2cpLafXsWfZYOg5jPgwMwg81yE78UF89fmLdjDIuUGhG9L2MnkFFGCslHQ9Y_mJCGlr_UArcS6Gxkzsu-15P106KJWCpId6vempvjqNNKee-MzmWFafbnIbIV84cklJtb-pVX7EvWuNDVwFQ2TdTTUR0WIxLz8YFRY0ogO8PHtMprNvkusmhtHwyOCrAVUyUNJiML3Kz7cxrCmc2Ig91BNYv--z9CGa_1ot1IQAo_Vf9W9FCsmcE2SSeYg","scope": "default","token_type": "Bearer","expires_in": 3600, "hasMFA": false}')
    } 
    else {
      sessionStorage.setItem("insideProtheus", "1");
    }
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Visualizar', action: this.viewClick.bind(this), icon: 'po-icon-clipboard', shortLabel: 'Visualizar'},
    { label: 'Ajuda (help)', action: this.aboutClick.bind(this), icon: 'po-icon-help', shortLabel: 'Ajuda'},
    { label: 'Sair', action: this.closeApp.bind(this), icon: 'po-icon-exit', shortLabel: 'Sair'},
  ];

  private viewClick() {
    this.router.navigate(['/','view']);
  }

  private aboutClick() {
    this.router.navigate(['/','about']);
  }

  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert("Clique não veio do protheus!");
    }
  }

}
