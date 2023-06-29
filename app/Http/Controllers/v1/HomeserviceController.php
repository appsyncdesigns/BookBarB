<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection; 
use App\Models\Homeservice;
use App\Models\Banners;
use App\Models\Category;
use App\Models\User;
use App\Models\Cities;
use App\Models\Settings;
use App\Models\Individual;
use App\Models\Services;
use App\Models\Specialist;
use App\Models\Packages;
use App\Models\Commission;
use App\Models\Products;
use App\Models\Timeslots;
use Illuminate\Support\Arr;
use Validator;
use DB;

class HomeserviceController extends Controller
{
    public function save(Request $request){
        $validator = Validator::make($request->all(), [
            'uid' => 'required',
            'name' => 'required',
            'cover' => 'required',
            'categories' => 'required',
            'UserType' => 'required',
            'address' => 'required',
            'lat' => 'required',
            'lng' => 'required',
            'about' => 'required',
            'rating' => 'required',
            'total_rating' => 'required',
            'website' => 'required',
            'timing' => 'required',
            'images' => 'required',
            'zipcode' => 'required',
            'service_at_home' => 'required',
            'verified' => 'required',
            'status' => 'required',
            'have_stylist'=>'required',
            'in_home'=>'required',
            'popular'=>'required',
            'have_shop'=>'required',
            // 'rate' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        
        $usertype = $request->UserType;
        
        // $usertype = str_replace( ',', '', $usertype);
        
        $modified_user_type = str_replace(",","",$usertype);
        
        $request->merge([
                'UserType' => $modified_user_type,
            ]);
        
        // $request->all();
        
        // print_r($request->UserType);die;

        $data = Salon::create($request->all());
        if (is_null($data)) {
            $response = [
            'data'=>$data,
            'message' => 'error',
            'status' => 500,
        ];
        return response()->json($response, 200);
        }
        // Commission::create([
        //     'uid'=>$request->uid,
        //     'rate'=>$request->rate,
        //     'status'=>1,
        // ]);
        $response = [
            'data'=>$data,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }
    
    public function getMenSalons()
    {
        $userarray = array();
        $data = DB::table('salon')->select('salon.id','salon.UserType')->where('salon.UserType','!=','null')->where('salon.id', '!=', '0')->get();
        $allItems = new Collection;
        foreach($data as $d){
          $usertype= $d->UserType;
         
            if(strpos($usertype, "1") !== false){
                $saloninfo = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
                salon.total_rating as totalRating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
                ->having('distance', '<', (int)$searchQuery->allowDistance)
                ->orderBy('distance')
                ->where(['salon.status'=>1,'salon.in_home'=>1])
                ->where('salon.id',$d->id)->get();
                
                $allItems = $allItems->concat($saloninfo);
                 
            }
                    
        }
       
        if (is_null($allItems)) {
            $response = [
                'success' => false,
                'message' => 'Data not found.',
                'status' => 404
            ];
            return response()->json($response, 404);
        }

        $response = [
            'data'=>$allItems,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }
    
    public function getWomenSalons()
    {
        $userarray = array();
        $data = DB::table('salon')->select('salon.id','salon.UserType')->where('salon.UserType','!=','null')->where('salon.id', '!=', '0')->get();
        $allItems = new Collection;
        foreach($data as $d){
          $usertype= $d->UserType;
         
            if(strpos($usertype, "2") !== false){
                $saloninfo = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
                salon.total_rating as totalRating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
                ->having('distance', '<', (int)$searchQuery->allowDistance)
                ->orderBy('distance')
                ->where(['salon.status'=>1,'salon.in_home'=>1])
                ->where('salon.id',$d->id)->get();
                
                $allItems = $allItems->concat($saloninfo);
                 
            }
                    
        }
        
        if (is_null($allItems)) {
            $response = [
                'success' => false,
                'message' => 'Data not found.',
                'status' => 404
            ];
            return response()->json($response, 404);
        }

        $response = [
            'data'=>$allItems,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }
    
    
    
     public function getKidsSalons()
    {
        $userarray = array();
        $data = DB::table('salon')->select('salon.id','salon.UserType')->where('salon.UserType','!=','null')->where('salon.id', '!=', '0')->get();
        $allItems = new Collection;
        foreach($data as $d){
          $usertype= $d->UserType;
         
             if(strpos($usertype, "3") !== false){
                $saloninfo = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
                salon.total_rating as totalRating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
                ->having('distance', '<', (int)$searchQuery->allowDistance)
                ->orderBy('distance')
                ->where(['salon.status'=>1,'salon.in_home'=>1])
                ->where('salon.id',$d->id)->get();
                
                $allItems = $allItems->concat($saloninfo);
                 
            }
                    
        }
        
        if (is_null($allItems)) {
            $response = [
                'success' => false,
                'message' => 'Data not found.',
                'status' => 404
            ];
            return response()->json($response, 404);
        }

        $response = [
            'data'=>$allItems,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }
    
    
    
    public function getById(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }

        $data = Salon::where('uid',$request->id)->first();
        
        if($data && $data!=null){
            $userinfo = User::where('id',$request->id)->first();
            if($userinfo != null){
                    $data->userinfo = $userinfo;
            }else
            {
                $data->userinfo="NA";
                
            }
        }
        // $data = DB::table('salon')->select('salon.*','users.first_name as first_name','users.last_name as last_name','users.email as email','users.mobile as mobile','users.password as password')->join('users','salon.uid','users.id')
        //         ->where('users.id',$request->id)
        //         ->first();
                
        if($data && $data->categories && $data->categories !=null){
            $ids = explode(',',$data->categories);
            $cats = Category::WhereIn('id',$ids)->get();
            $data->web_cates_data = $cats;
        }
       
        if($data && $data->UserType && $data->UserType !=null){
            $tids = array();
            $usertype = $data->UserType;
            $tids = str_split($usertype); 
            
            $types = DB::table('usertype')->select('usertype.*')->WhereIn('id',$tids)->get();
            $data->user_type_data = $types;
        }
        if($data && $data->cid && $data->cid !=null){
            $data->city_data = Cities::find($data->cid);
        }
        if (is_null($data)) {
            $response = [
                'success' => false,
                'message' => 'Data not found.',
                'status' => 404
            ];
            return response()->json($response, 404);
        }

        $response = [
            'data'=>$data,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function getSearchResult(Request $request){
        $str = "";
        if ($request->has('param') && $request->has('lat') && $request->has('lng')) {
            $str = $request->param;
            $lat = $request->lat;
            $lng = $request->lng;
        }
        $searchQuery = Settings::select('allowDistance','searchResultKind')->first();
        $categories = Category::where(['status'=>1])->get();
        if($searchQuery->searchResultKind == 1){
            $values = 3959; // miles
            $distanceType = 'miles';
        }else{
            $values = 6371; // km
            $distanceType = 'km';
        }
        
        // $timeslots=Timeslots::select('uid')->distinct()->get();

        $salon = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
        salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$lng.') ) + sin( radians('.$lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where('salon.name', 'like', '%'.$str.'%')
        ->where(['salon.status'=>1,'salon.in_home'=>1])
        // ->whereIn('salon.uid', $timeslots)
        ->get();

        $freelancer = Individual::select(DB::raw('individual.id as id,individual.uid as uid,individual.categories,individual.lat as lat,individual.lng as lng,users.first_name as first_name,users.last_name as last_name,users.cover as cover, ( '.$values.' * acos( cos( radians('.$lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$lng.') ) + sin( radians('.$lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->join('users','individual.uid','users.id')
        ->where('users.first_name', 'like', '%'.$str.'%')
        ->where(['individual.status'=>1,'individual.in_home'=>1])
        ->get();
        foreach($freelancer as $loop){
            $loop->distance = round($loop->distance,2);
        }
        foreach($salon as $loop){
            $loop->distance = round($loop->distance,2);
        }
        $response = [
            'salon'=>$salon,
            'individual'=>$freelancer,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }
    
    
    // public function getIndividualData(Request $request){
    //     $validator = Validator::make($request->all(), [
    //         'lat' => 'required',
    //         'lng' => 'required',
    //     ]);
    //     if ($validator->fails()) {
    //         $response = [
    //             'success' => false,
    //             'message' => 'Validation Error.', $validator->errors(),
    //             'status'=> 500
    //         ];
    //         return response()->json($response, 404);
    //     }
    //     $searchQuery = Settings::select('allowDistance','searchResultKind')->first();
    //     $categories = Category::where(['status'=>1])->get();
    //     if($searchQuery->searchResultKind == 1){
    //         $values = 3959; // miles
    //         $distanceType = 'miles';
    //     }else{
    //         $values = 6371; // km
    //         $distanceType = 'km';
    //     }
        
    //     $timeslots=Timeslots::select('uid')->distinct()->get();
        
       
    //     $salon = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
    //     salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
    //     ->having('distance', '<', (int)$searchQuery->allowDistance)
    //     ->orderBy('distance')
    //     ->where(['salon.status'=>1,'salon.in_home'=>1])
    //     ->whereIn('salon.uid', $timeslots)
    //     ->get();

    
    //     $freelancer = Individual::select(DB::raw('individual.id as id,individual.uid as uid,individual.lat as lat,individual.lng as lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
    //     ->having('distance', '<', (int)$searchQuery->allowDistance)
    //     ->orderBy('distance')
    //     ->where(['individual.status'=>1,'individual.in_home'=>1])
    //     ->get();

    //     foreach($freelancer as $loop){
    //         $loop->userInfo = User::select('first_name','last_name','cover')->find($loop->uid);
    //     }

    //     $categories =  Category::where('status',1)->get();

    //     $cities  = Cities::select(DB::raw('cities.id as id,cities.name as name, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
    //     ->having('distance', '<', (int)$searchQuery->allowDistance)
    //     ->orderBy('distance')
    //     ->where(['cities.status'=>1])
    //     ->first();
    //     $banners =[];
    //     if (isset($cities) && $cities) {
    //         $banners =Banners::where('city_id',$cities->id)->get();
    //     }else{
    //         $banners =Banners::where('city_id','0')->get();
    //     }
    //     $salonUID = $salon->pluck('uid')->toArray();
    //     $freelancerUID = $freelancer->pluck('uid')->toArray();
    //     $uidArray = Arr::collapse([$salonUID,$freelancerUID]);
    //     $products = Products::where('in_home',1)->WhereIn('freelacer_id',$uidArray)->limit(10)->get();
    //     $response = [
    //         'salon'=>$salon,
    //         'categories'=>$categories,
    //         'individual'=>$freelancer,
    //         'cities'=>$cities,
    //         'banners'=>$banners,
    //         'products'=>$products,
    //         'success' => true,
    //         'status' => 200,
    //     ];
    //     return response()->json($response, 200);
    // }
    

    public function getHomeData(Request $request){
        $validator = Validator::make($request->all(), [
            'lat' => 'required',
            'lng' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        $searchQuery = Settings::select('allowDistance','searchResultKind')->first();
        $categories = Category::where(['status'=>1])->get();
        if($searchQuery->searchResultKind == 1){
            $values = 3959; // miles
            $distanceType = 'miles';
        }else{
            $values = 6371; // km
            $distanceType = 'km';
        }
        
        // $timeslots=Timeslots::select('uid')->distinct()->get();
        
       
        $salon = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
        salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['salon.status'=>1,'salon.in_home'=>1])
        ->where('salon.id', '!=', '0')
        // ->whereIn('salon.uid', $timeslots)
        ->get();

    
        $freelancer = Individual::select(DB::raw('individual.id as id,individual.uid as uid,individual.lat as lat,individual.lng as lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['individual.status'=>1,'individual.in_home'=>1])
        ->get();
        
         $homeService = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
        salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->where(['salon.status'=>1,'salon.in_home'=>1])
        ->where(['salon.id'=>0])
        ->get();
        
        
        $mendata = DB::table('salon')->select('salon.id','salon.UserType')->where('salon.UserType','!=','null')->where('salon.id', '!=', '0')->get();
        $menallItems = new Collection;
        $womenallItems = new Collection;
        $kidsallItems = new Collection;
        foreach($mendata as $d){
            // if(strpos("PHP string example.", "PHP") !== false)
        //   $usertype= explode(',',$d->UserType);
            $usertype= $d->UserType;

            if(strpos($usertype, "1") !== false){
                $saloninfo = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
                salon.total_rating as totalRating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
                ->having('distance', '<', (int)$searchQuery->allowDistance)
                ->orderBy('distance')
                ->where(['salon.status'=>1,'salon.in_home'=>1])
                ->where('salon.id',$d->id)->get();
                // dd($saloninfo);die;
                // foreach($saloninfo as $info){
                //     $info->timing = json_decode($info->timing);
                // }
                $menallItems = $menallItems->concat($saloninfo);
                 
            }
            if(strpos($usertype, "2") !== false){
                $wsaloninfo = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
                salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
                ->having('distance', '<', (int)$searchQuery->allowDistance)
                ->orderBy('distance')
                ->where(['salon.status'=>1,'salon.in_home'=>1])
                ->where('salon.id',$d->id)->get();
                // foreach($wsaloninfo as $in){
                //     $in->timing = json_decode($in->timing);
                // }
                $womenallItems = $womenallItems->concat($wsaloninfo);
                
                 
            }
            if(strpos($usertype, "3") !== false){
                $ksaloninfo = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
                salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
                ->having('distance', '<', (int)$searchQuery->allowDistance)
                ->orderBy('distance')
                ->where(['salon.status'=>1,'salon.in_home'=>1])
                ->where('salon.id',$d->id)->get();
                // foreach($ksaloninfo as $k){
                //     $k->timing = json_decode($k->timing);
                // }
                $kidsallItems = $kidsallItems->concat($ksaloninfo);
                 
            }
                    
        }
        
        // $homeService = Individual::select(DB::raw('individual.id as id,individual.uid as uid,users.first_name as name,individual.rating as rating,individual.total_rating as total_rating,individual.address as address,individual.images as cover,individual.lat as salon_lat,individual.lng as salon_lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        // ->join("users", "users.id", "=", "individual.uid")
        // ->having('distance', '<', (int)$searchQuery->allowDistance)
        // ->orderBy('distance')
        // ->where(['individual.status'=>1,'individual.in_home'=>1])
        // // ->toSql();
        // ->get();
        
        // dd($homeService);
        
        
        
        // $freelancer = Individual::select(DB::raw('individual.id as id,individual.uid as uid,individual.lat as lat,individual.lng as lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        // ->having('distance', '<', (int)$searchQuery->allowDistance)
        // ->orderBy('distance')
        // ->where(['individual.status'=>1,'individual.in_home'=>1])
        // ->get();

        foreach($freelancer as $loop){
            $loop->userInfo = User::select('first_name','last_name','cover')->find($loop->uid);
        }

        $categories =  Category::where('status',1)->get();

        $cities  = Cities::select(DB::raw('cities.id as id,cities.name as name, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['cities.status'=>1])
        ->first();
        $banners =[];
        if (isset($cities) && $cities) {
            $banners =Banners::where('city_id',$cities->id)->get();
        }else{
            $banners =Banners::where('city_id','0')->get();
        }
        $salonUID = $salon->pluck('uid')->toArray();
        $freelancerUID = $freelancer->pluck('uid')->toArray();
        $uidArray = Arr::collapse([$salonUID,$freelancerUID]);
        $products = Products::where('in_home',1)->WhereIn('freelacer_id',$uidArray)->limit(10)->get();
        
        $response = [
            // 'salon'=>$salon,
            'salonmen'=>$menallItems,
            'salonwomen'=>$womenallItems,
            'salonkids'=>$kidsallItems,
            'homeService'=>$homeService,
            'categories'=>$categories,
            'individual'=>$freelancer,
            'cities'=>$cities,
            'banners'=>$banners,
            'products'=>$products,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function getHomeDataWeb(Request $request){
        $validator = Validator::make($request->all(), [
            'lat' => 'required',
            'lng' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        $searchQuery = Settings::select('allowDistance','searchResultKind')->first();
        $categories = Category::where(['status'=>1])->get();
        if($searchQuery->searchResultKind == 1){
            $values = 3959; // miles
            $distanceType = 'miles';
        }else{
            $values = 6371; // km
            $distanceType = 'km';
        }
        
        // $timeslots=Timeslots::select('uid')->distinct()->get();

        $salon = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
        salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.lat as salon_lat,salon.lng as salon_lng,salon.categories, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['salon.status'=>1,'salon.in_home'=>1])
        // ->whereIn('salon.uid', $timeslots)
        ->get();
        foreach($salon as $loop){
            $ids = explode(',',$loop->categories);
            $loop->categories = Category::select('id','name','cover')->WhereIn('id',$ids)->get();
        }

        $freelancer = Individual::select(DB::raw('individual.id as id,individual.fee_start as fee_start,individual.categories,individual.total_rating as total_rating,individual.rating as rating,individual.uid as uid,individual.lat as lat,individual.lng as lng, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['individual.status'=>1,'individual.in_home'=>1])
        ->get();
        foreach($freelancer as $loop){
            $loop->userInfo = User::select('first_name','last_name','cover')->find($loop->uid);
            $ids = explode(',',$loop->categories);
            $loop->categories = Category::select('id','name','cover')->WhereIn('id',$ids)->get();
        }
        // foreach($freelancer as $loop){
        //     $loop->userInfo = User::select('first_name','last_name','cover')->find($loop->uid);
        // }

        $categories =  Category::where('status',1)->get();

        $cities  = Cities::select(DB::raw('cities.id as id,cities.name as name, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['cities.status'=>1])
        ->first();
        $banners =[];
        if (isset($cities) && $cities) {
            $banners =Banners::where('city_id',$cities->id)->get();
        }
        $salonUID = $salon->pluck('uid')->toArray();
        $freelancerUID = $freelancer->pluck('uid')->toArray();
        $uidArray = Arr::collapse([$salonUID,$freelancerUID]);
        $products = Products::where('in_home',1)->WhereIn('freelacer_id',$uidArray)->limit(10)->get();
        $response = [
            'salon'=>$salon,
            'categories'=>$categories,
            'individual'=>$freelancer,
            'cities'=>$cities,
            'banners'=>$banners,
            'products'=>$products,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function getTopFreelancer(Request $request){
        $validator = Validator::make($request->all(), [
            'lat' => 'required',
            'lng' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        $searchQuery = Settings::select('allowDistance','searchResultKind')->first();
        $categories = Category::where(['status'=>1])->get();
        if($searchQuery->searchResultKind == 1){
            $values = 3959; // miles
            $distanceType = 'miles';
        }else{
            $values = 6371; // km
            $distanceType = 'km';
        }

        $data = Individual::select(DB::raw('individual.id as id,individual.uid as uid,individual.categories,individual.fee_start as fee_start,
        individual.rating as rating,individual.total_rating as total_rating, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['individual.status'=>1,'individual.in_home'=>1])
        ->get();
        foreach($data as $loop){
            $loop->userInfo = User::select('first_name','last_name','cover')->find($loop->uid);
            $ids = explode(',',$loop->categories);
            $loop->categories = Category::select('id','name','cover')->WhereIn('id',$ids)->get();
        }

        $response = [
            'data'=>$data,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function getTopSalon(Request $request){
        $validator = Validator::make($request->all(), [
            'lat' => 'required',
            'lng' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        $searchQuery = Settings::select('allowDistance','searchResultKind')->first();
        $categories = Category::where(['status'=>1])->get();
        if($searchQuery->searchResultKind == 1){
            $values = 3959; // miles
            $distanceType = 'miles';
        }else{
            $values = 6371; // km
            $distanceType = 'km';
        }
        
        
        //  $timeslots=Timeslots::select('uid')->distinct()->get();
         

        $data = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
        salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.categories as categories, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['salon.status'=>1,'salon.in_home'=>1])
        ->where('salon.id', '!=' , '0')
        ->get();

        foreach($data as $loop){
            $ids = explode(',',$loop->categories);
            $loop->categories = Category::select('id','name','cover')->WhereIn('id',$ids)->get();
        }

        $response = [
            'data'=>$data,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function getDataFromCategory(Request $request){
        $validator = Validator::make($request->all(), [
            'lat' => 'required',
            'lng' => 'required',
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        $searchQuery = Settings::select('allowDistance','searchResultKind')->first();
        $categories = Category::where(['status'=>1])->get();
        if($searchQuery->searchResultKind == 1){
            $values = 3959; // miles
            $distanceType = 'miles';
        }else{
            $values = 6371; // km
            $distanceType = 'km';
        }

        // $timeslots=Timeslots::select('uid')->distinct()->get();

        $salon = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
        salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.categories, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['salon.status'=>1,'salon.in_home'=>1])
        // ->whereIn('salon.uid', $timeslots)
        ->whereRaw("find_in_set('".$request->id."',salon.categories)")
        ->get();
        foreach($salon as $loop){
            $ids = explode(',',$loop->categories);
            $loop->categories = Category::select('id','name','cover')->WhereIn('id',$ids)->get();
        }

        $freelancer = Individual::select(DB::raw('individual.id as id,individual.uid as uid,individual.categories, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['individual.status'=>1,'individual.in_home'=>1])
        ->whereRaw("find_in_set('".$request->id."',individual.categories)")
        ->get();
        foreach($freelancer as $loop){
            $loop->userInfo = User::select('first_name','last_name','cover')->find($loop->uid);
            $ids = explode(',',$loop->categories);
            $loop->categories = Category::select('id','name','cover')->WhereIn('id',$ids)->get();
        }

        $response = [
            'salon'=>$salon,
            'individual'=>$freelancer,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function getDataFromCategoryWeb(Request $request){
        $validator = Validator::make($request->all(), [
            'lat' => 'required',
            'lng' => 'required',
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        $searchQuery = Settings::select('allowDistance','searchResultKind')->first();
        $categories = Category::where(['status'=>1])->get();
        if($searchQuery->searchResultKind == 1){
            $values = 3959; // miles
            $distanceType = 'miles';
        }else{
            $values = 6371; // km
            $distanceType = 'km';
        }
        
        // $timeslots=Timeslots::select('uid')->distinct()->get();

        $salon = Salon::select(DB::raw('salon.id as id,salon.uid as uid,salon.name as name,salon.rating as rating,
        salon.total_rating as total_rating,salon.address as address,salon.cover as cover,salon.categories, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['salon.status'=>1,'salon.in_home'=>1])
        // ->whereIn('salon.uid', $timeslots)
        ->whereRaw("find_in_set('".$request->id."',salon.categories)")
        ->get();
        foreach($salon as $loop){
            $ids = explode(',',$loop->categories);
            $loop->categories = Category::select('id','name','cover')->WhereIn('id',$ids)->get();
        }

        $freelancer = Individual::select(DB::raw('individual.id as id,individual.uid as uid,individual.categories,individual.fee_start as fee_start,
        individual.rating as rating,individual.total_rating as total_rating, ( '.$values.' * acos( cos( radians('.$request->lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$request->lng.') ) + sin( radians('.$request->lat.') ) * sin( radians( lat ) ) ) ) AS distance'))
        ->having('distance', '<', (int)$searchQuery->allowDistance)
        ->orderBy('distance')
        ->where(['individual.status'=>1,'individual.in_home'=>1])
        ->whereRaw("find_in_set('".$request->id."',individual.categories)")
        ->get();
        foreach($freelancer as $loop){
            $loop->userInfo = User::select('first_name','last_name','cover')->find($loop->uid);
            $ids = explode(',',$loop->categories);
            $loop->categories = Category::select('id','name','cover')->WhereIn('id',$ids)->get();
        }

        $response = [
            'salon'=>$salon,
            'individual'=>$freelancer,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function update(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        
        $info = Salon::find($request->id);
        
        $usertype = $request->UserType;
        
        $modified_user_type = str_replace(",","",$usertype);
        
        $request->merge([
                'UserType' => $modified_user_type,
            ]);
        
        // print_r($info->uid);die;
        
        // $userinfo = array(
        //     'first_name' => $request->first_name,
        //     'last_name'  => $request->last_name,
        //     'email'      => $request->email,
        //     'mobile'     => $request->mobile
        //     );
            
        //     print_r($userinfo);die;
        $userupdate = User::find($info->uid)->update($request->all());
            
            
        $data = Salon::find($request->id)->update($request->all());
        
        

        if (is_null($data)) {
            $response = [
                'success' => false,
                'message' => 'Data not found.',
                'status' => 404
            ];
            return response()->json($response, 404);
        }
        $response = [
            'data'=>$data,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function delete(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'uid' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        $data = Salon::find($request->id);
        $data2 = User::find($request->uid);
        DB::table('commission')->where('uid',$request->uid)->delete();
        if ($data && $data2) {
            $data->delete();
            $data2->delete();
            $response = [
                'data'=>$data,
                'success' => true,
                'status' => 200,
            ];
            return response()->json($response, 200);
        }
        $response = [
            'success' => false,
            'message' => 'Data not found.',
            'status' => 404
        ];
        return response()->json($response, 404);
    }

    public function getAll(){
        $a=1;
        $data = Salon::where('id','!=','0')->get();

        if (is_null($data)) {
            $response = [
                'success' => false,
                'message' => 'Data not found.',
                'status' => 404
            ];
            return response()->json($response, 404);
        }
        
         $data = $data->map(function ($item) {
            $item->data_id = 1;
        
            return $item;
        });
        
        $data->all();
        
        foreach($data as $loop){
            $loop->data_id=$a;
            if($loop && $loop->categories && $loop->categories !=null){
                $ids = explode(',',$loop->categories);
                $cats = Category::WhereIn('id',$ids)->get();
                $loop->web_cates_data = $cats;
            }
            if($loop && $loop->cid && $loop->cid !=null){
                $loop->city_data = Cities::find($loop->cid);
            }
            
            $a++;
        }
        $response = [
            'data'=>$data,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }
    
    
    public function getAllUserTypes(){
       
        $data = DB::table('usertype')->select('usertype.*')->get();
        $data->all();
         
        if (is_null($data)) {
            $response = [
                'success' => false,
                'message' => 'Data not found.',
                'status' => 404
            ];
            return response()->json($response, 404);
        }

        $response = [
            'data'=>$data,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function getListForOffers(Request $request){
        $salon = Salon::where('id','!=','0')->get();
        $individuals =  DB::table('individual')
                ->select('individual.*','users.first_name as first_name','users.last_name as last_name')
                ->join('users','individual.uid','users.id')
                ->get();
        $data = [];

        foreach($salon as $row) {
            array_push($data, (object)[
                    'name' => $row->name,
                    'id' => $row->uid,
            ]);
        }

        foreach($individuals as $row) {
            array_push($data, (object)[
                    'name' => $row->first_name .' '.$row->last_name,
                    'id' => $row->uid,
            ]);
        }
        $response = [
            'data'=>$data,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function getActiveCities(Request $request){
        $data = Salon::where('status',1)->get();
        $response = [
            'data'=>$data,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function importData(Request $request){
        $request->validate([
            "csv_file" => "required",
        ]);
        $file = $request->file("csv_file");
        $csvData = file_get_contents($file);
        $rows = array_map("str_getcsv", explode("\n", $csvData));
        $header = array_shift($rows);
        foreach ($rows as $row) {
            if (isset($row[0])) {
                if ($row[0] != "") {

                    if(count($header) == count($row)){
                        $row = array_combine($header, $row);
                        $insertInfo =  array(
                            'id' => $row['id'],
                            'name' => $row['name'],
                            'lat' => $row['lat'],
                            'lng' => $row['lng'],
                            'status' => $row['status'],
                        );
                        $checkLead  =  Salon::where("id", "=", $row["id"])->first();
                        if (!is_null($checkLead)) {
                            DB::table('cities')->where("id", "=", $row["id"])->update($insertInfo);
                        }
                        else {
                            DB::table('cities')->insert($insertInfo);
                        }
                    }
                }
            }
        }
        $response = [
            'data'=>'Done',
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }

    public function salonDetails(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => 'Validation Error.', $validator->errors(),
                'status'=> 500
            ];
            return response()->json($response, 404);
        }
        
        
        $data = Salon::where('uid',$request->id)->first();
        $userInfo = User::where('id',$request->id)->first();
        $data['email']= $userInfo->email;
        $data['mobile'] = $userInfo->mobile;
        $services = Services::select('cate_id')->where(['uid'=>$request->id,'status'=>1])->get()->pluck('cate_id');
        $specialist = Specialist::where('salon_uid',$request->id)->get();
        $categories = Category::where('status',1)->WhereIn('id',$services)->get();
        foreach($categories as $loop){
            $loop->services = Services::where(['status'=>1,'cate_id'=>$loop->id,'uid'=>$request->id])->count();
        }
        $packages =Packages::where('uid',$request->id)->where('status','1')->get();
        $response = [
            'data'=>$data,
            'categories'=>$categories,
            'specialist'=>$specialist,
            'packages'=>$packages,
            'success' => true,
            'status' => 200,
        ];
        return response()->json($response, 200);
    }
}
