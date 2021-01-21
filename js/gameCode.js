
      var full=[[0,0,0],[0,0,0],[0,0,0]];
      var val=[[1,1,1],[1,1,1],[1,1,1]];
      function judge(){

      for(var i=0;i<3;i++){
          if(full[i][0]==full[i][1]&&full[i][1]==full[i][2]&&full[i][0]!=0){
                          if(full[i][0]==1){
                               window.alert("you win!");
                                return true;
                          }
                          else {
                                window.alert("you lose");
                                return true;
                          }
          }
      }

      for(var i=0;i<3;i++){
          if(full[0][i]==full[1][i]&&full[1][i]==full[2][i]&&full[0][i]!=0){
                          if(full[0][i]==1){
                               window.alert("you win!");
                               return true;
                          }
                          else {
                               window.alert("you lose");
                               return true;
                          }
          }
      }

      if(full[0][0]==full[1][1]&&full[1][1]==full[2][2]&&full[0][0]!=0){
                          if(full[0][0]==1){
                               window.alert("you win!");
                               return true;
                        }
                          else {
                               window.alert("you lose");
                               return true;
                        }
      }
      if(full[0][2]==full[1][1]&&full[2][0]==full[1][1]&&full[0][2]!=0){
                          if(full[0][2]==1){
                               window.alert("you win!");
                               return true;
                        }
                          else {
                              window.alert("you lose");
                              return true;
                        }
      }
      for(var i=0;i<3;i++){
         for(var j=0;j<3;j++){
            if(full[i][j]==0)
               return false;
             if(i==2&&j==2)
               {window.alert("tie!");
                return true;
               }
         }
      }
      return false;
}
function bn(i,j){

      if(full[i][j]!=0){
           return 0;
      }else{

           full[i][j]=1;
           num1=(i*3+j+1)+"";
           document.getElementById(num1).value="X";
           if(judge()==true){
               return;
           }
           ai();
      }
}

function resetValue(){

      for(var i=0;i<3;i++){
           for(var j=0;j<3;j++){
               if(full[i][j]!=0)
                   val[i][j]=0;
               else{


                  if(((full[0][j]+full[1][j]+full[2][j])==4)&&(full[0][j]*full[1][j]*full[2][j])==0
                  &&((full[0][j]-1)*(full[1][j]-1)*(full[2][j]-1))==-1)
                        val[i][j]=val[i][j]+10000;
                  if(((full[i][0]+full[i][1]+full[i][2])==4)&&(full[i][0]*full[i][1]*full[i][2])==0
                  &&((full[i][0]-1)*(full[i][1]-1)*(full[i][2]-1))==-1)
                        val[i][j]=val[i][j]+10000;

                  if(((full[0][j]+full[1][j]+full[2][j])==2)&&(full[0][j]*full[1][j]*full[2][j])==0
                  &&((full[0][j]-1)*(full[1][j]-1)*(full[2][j]-1))==0)
                        val[i][j]=val[i][j]+1000;
                  if(((full[i][0]+full[i][1]+full[i][2])==2)&&(full[i][0]*full[i][1]*full[i][2])==0
                  &&((full[i][0]-1)*(full[i][1]-1)*(full[i][2]-1))==0)
                        val[i][j]=val[i][j]+1000;

                  if(((full[0][j]+full[1][j]+full[2][j])==1)&&(full[0][j]*full[1][j]*full[2][j])==0
                  &&((full[0][j]-1)*(full[1][j]-1)*(full[2][j]-1))==0)
                        val[i][j]=val[i][j]+10;
                  if(((full[i][0]+full[i][1]+full[i][2])==1)&&(full[i][0]*full[i][1]*full[i][2])==0
                  &&((full[i][0]-1)*(full[i][1]-1)*(full[i][2]-1))==0)
                        val[i][j]=val[i][j]+10;

                  if(((full[0][j]+full[1][j]+full[2][j])==2)&&(full[0][j]*full[1][j]*full[2][j])==0
                  &&((full[0][j]-1)*(full[1][j]-1)*(full[2][j]-1))==1)
                        val[i][j]=val[i][j]+5;
                  if(((full[i][0]+full[i][1]+full[i][2])==2)&&(full[i][0]*full[i][1]*full[i][2])==0
                  &&((full[i][0]-1)*(full[i][1]-1)*(full[i][2]-1))==1)
                        val[i][j]=val[i][j]+5;

                  if(((full[0][j]+full[1][j]+full[2][j])==0)&&(full[0][j]*full[1][j]*full[2][j])==0
                  &&((full[0][j]-1)*(full[1][j]-1)*(full[2][j]-1))==-1)
                        val[i][j]=val[i][j]+2;
                  if(((full[i][0]+full[i][1]+full[i][2])==0)&&(full[i][0]*full[i][1]*full[i][2])==0
                  &&((full[i][0]-1)*(full[i][1]-1)*(full[i][2]-1))==-1)
                        val[i][j]=val[i][j]+2;


                   if((i==0&&j==0)||(i==2&&j==2)||(i==1&&j==1)){
                        if(((full[0][0]+full[1][1]+full[2][2])==4)&&(full[0][0]*full[1][1]*full[2][2])==0
                        &&((full[0][0]-1)*(full[1][1]-1)*(full[2][2]-1))==-1)
                        val[i][j]=val[i][j]+10000;


                  if(((full[0][0]+full[1][1]+full[2][2])==2)&&(full[0][0]*full[1][1]*full[2][2])==0
                  &&((full[0][0]-1)*(full[1][1]-1)*(full[2][2]-1))==0)
                        val[i][j]=val[i][j]+1000;


                  if(((full[0][0]+full[1][1]+full[2][2])==1)&&(full[0][0]*full[1][1]*full[2][2])==0
                  &&((full[0][0]-1)*(full[1][1]-1)*(full[2][2]-1))==0)
                        val[i][j]=val[i][j]+10;


                  if(((full[0][0]+full[1][1]+full[2][2])==2)&&(full[0][0]*full[1][1]*full[2][2])==0
                  &&((full[0][0]-1)*(full[1][1]-1)*(full[2][2]-1))==1)
                        val[i][j]=val[i][j]+5;


                  if(((full[0][0]+full[1][1]+full[2][2])==0)&&(full[0][0]*full[1][1]*full[2][2])==0
                  &&((full[0][0]-1)*(full[1][1]-1)*(full[2][2]-1))==-1)
                        val[i][j]=val[i][j]+2;
               }

                if((i==0&&j==2)||(i==2&&j==0)||(i==1&&j==1)){

                      if(((full[0][2]+full[1][1]+full[2][0])==4)&&(full[0][2]*full[1][1]*full[2][0])==0
                      &&((full[0][2]-1)*(full[1][1]-1)*(full[2][0]-1))==-1)
                       val[i][j]=val[i][j]+10000;

                       if(((full[0][2]+full[1][1]+full[2][0])==2)&&(full[0][2]*full[1][1]*full[2][0])==0
                       &&((full[0][2]-1)*(full[1][1]-1)*(full[2][0]-1))==0)
                       val[i][j]=val[i][j]+1000;

                       if(((full[0][2]+full[1][1]+full[2][0])==1)&&(full[0][2]*full[1][1]*full[2][0])==0
                       &&((full[0][2]-1)*(full[1][1]-1)*(full[2][0]-1))==0)
                       val[i][j]=val[i][j]+10;

                       if(((full[0][2]+full[1][1]+full[2][0])==2)&&(full[0][2]*full[1][1]*full[2][0])==0
                       &&((full[0][2]-1)*(full[1][1]-1)*(full[2][0]-1))==1)
                       val[i][j]=val[i][j]+5;

                       if(((full[0][2]+full[1][1]+full[2][0])==0)&&(full[0][2]*full[1][1]*full[2][0])==0
                       &&((full[0][2]-1)*(full[1][1]-1)*(full[2][0]-1))==-1)
                       val[i][j]=val[i][j]+2;
                      }
                   }
           }
      }
}
function ai(){
      if(judge()==true){
          return;
      }

      resetValue();
      var mi=0,mj=0,temp=0;
      for(var i=0;i<3;i++)
         for(var j=0;j<3;j++){
             if(val[i][j]>temp){
                  temp=val[i][j];
                  mi=i;
                  mj=j;
             }
         }
         full[mi][mj]=2;
         num1=(mi*3+mj+1)+"";
         document.getElementById(num1).value="O";
         if(judge()==true){
          return;
      }
}
function lose(){
window.alert("you lose");
location.reload();
}